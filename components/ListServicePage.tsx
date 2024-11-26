import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { ServiceResponse } from "../interfaces/serviceEntity/ServiceResponse";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { getAllServices } from "../services/serviceService";

const ListServicesPage = () => {
  const { token } = useAuth(); // Obtén el token del contexto
  const [services, setServices] = useState<ServiceResponse[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Campo de búsqueda
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 500); // Valor con debounce

  useEffect(() => {
    // Función para obtener los servicios desde el backend
    const fetchServices = async () => {
      if (!token) return;
      setIsLoading(true);

      try {
        const response = await getAllServices(page, 10, token);
        if (response.content.length > 0) {
          setServices((prevServices) =>
            page === 0 ? response.content : [...prevServices, ...response.content]
          );
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, [page, token, debouncedSearchQuery]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    setPage(0); // Reinicia la paginación al buscar
  };

  const loadMore = () => {
    if (!isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Barra de búsqueda */}
      <TextInput
        placeholder="Buscar por tags"
        value={searchQuery}
        onChangeText={handleSearch}
        style={styles.searchBar}
      />

      {/* Lista de servicios */}
    <FlatList
        data={services}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.serviceItem}>
            <Text style={styles.serviceName}>{item.name}</Text>
            <Text style={styles.serviceProvider}>Por: {item.provider}</Text>
            <Text style={styles.serviceDescription}>{item.description}</Text>
            </View>
        )}
        onEndReached={loadMore} // Llama a loadMore cuando llega al final de la lista
        onEndReachedThreshold={0.5} // Umbral para cargar más datos
        ListFooterComponent={
            isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
        ListEmptyComponent={
            !isLoading ? (
            <Text style={styles.emptyText}>No se encontraron servicios</Text>
            ) : null
        }
        />

    </View>
  );
};

export default ListServicesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  serviceItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  serviceProvider: {
    fontSize: 14,
    color: "#555",
  },
  serviceDescription: {
    fontSize: 14,
    color: "#777",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "#999",
  },
});

