
import Layout from "../components/Layout";

import { useFormik } from 'formik';
import * as Yup from 'yup';

const Registro = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es obligatorio'),
        }),
        onSubmit: data =>{
            console.log('data', data);
        }
    });


    return(
        <Layout>
      <h1 className="text-center text-2xl text-white font-light">Registrarse</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-sm">
          <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>

          <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
              className={`${"shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tigh focus:outline-none focus:shadow-outline"}  ${
                formik.errors.name ? 'border-red-500' : ''
              }`}
                id="name"
                type="text"
                placeholder="Ingrese nombre"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div> 
            {formik.errors.name ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-2 text-sm">
                    <p>{formik.errors.name}</p>
                </div>
            ) : null }
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastname"
              >
                Apellido
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tigh focus:outline-none focus:shadow-outline"
                id="lastname"
                type="text"
                placeholder="Ingrese apellido"
                value={formik.values.lastname}
                onChange={formik.handleChange}
              />
            </div> 
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tigh focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Ingrese Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tigh focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Ingrese contraseña"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            <input type="submit"    
             className="bg-gray-700 w-full mt-5 p-2 text-white uppercase hover:cursor-pointer hover:bg-gray-900"
             value="Crear cuenta"
            />
          </form>
        </div>
      </div>
    </Layout>
    );
}

export default Registro;