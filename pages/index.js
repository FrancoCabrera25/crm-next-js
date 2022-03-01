import Layout from "../components/Layout";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const GET_CLIENT = gql`
  query ExampleQuery {
    getClients {
      id
      name
      lastname
      company
      email
      phone
      dni
      seller
    }
  }
`;

const Home = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery(GET_CLIENT);

  if (loading) return "Cargando";

  if (!data) {
    router.push("/login");
  }

  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-gray-800 font-ligth">Clientes</h1>

        <table className="table-auto shadow-md mt-10 w-full w-lg">
          <thead className="bg-gray-800">
            <tr className="text-white">
              <th className="w-1/5 py-2">Nombre</th>
              <th className="w-1/5 py-2">Empresa</th>
              <th className="w-1/5 py-2">Email</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data?.getClients.map((client) => (
              <tr key={client.id}>
                <td className="border px-4 py-2">
                  {" "}
                  {client.name} {client.lastname}
                </td>
                <td className="border px-4 py-2"> {client.company}</td>
                <td className="border px-4 py-2"> {client.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </div>
  );
};

export default Home;
