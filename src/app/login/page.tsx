import React from 'react';

export default function LoginPage() {
  async function login(formData: FormData) {
    ('use server');
    const { email, password } = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    console.log(email, password);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="bg-white shadow-md rounded-md px-8 py-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form action={login}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Endereço de Email
            </label>
            <input
              id="email"
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring-blue-500 focus:ring-offset-blue-200">
              Entrar
            </button>
            <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
              Esqueceu sua senha?
            </a>
            <a href="/register" className="text-sm text-blue-500 hover:underline">
              Registrar
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
