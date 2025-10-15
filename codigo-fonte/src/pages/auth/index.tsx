import React, { useState } from 'react';

import { validateEmail } from 'utils/validateEmail';
import { formatCPF } from 'utils/formatCPF';

export default function AuthScreens() {
  const [mode, setMode] = useState('signup');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // --- Formatar CPF ---
  const handleCpfChange = (cpf: string) => {
    setCpf(formatCPF(cpf));
  };

  // --- Valida e-mail ---
  const handleEmailChange = (email: string) => {
    setEmail(email);

    setEmailError(validateEmail(email));
  };

  // ---  Envia o formulário ---
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (mode === 'signup') {
      if (!emailError) {
        setSuccessMsg(
          'Cadastro realizado com sucesso! Você será redirecionado para a área de login...',
        );
        setTimeout(() => {
          setMode('login');
          setSuccessMsg('');
        }, 3000);
      } else {
        alert('Corrija os campos antes de continuar.');
      }
    } else {
      alert('Login efetuado com sucesso!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1f2f6]">
      <div className="bg-white rounded-[28px] shadow-lg border border-black/10 p-10 w-full max-w-md relative">
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-4 ring-[#0ea5e9] -z-10" />

        <h1 className="text-4xl font-extrabold text-black text-center mb-8">
          {mode === 'signup' ? 'Cadastro' : 'Login'}
        </h1>

        {/* Mensagem de sucesso */}
        {successMsg && (
          <div className="mb-5 p-3 rounded-lg text-center text-green-800 bg-green-100 border border-green-400">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <>
              <input
                name="cpf"
                value={cpf}
                onChange={(e) => handleCpfChange(e.target.value)}
                placeholder="Seu CPF"
                maxLength={14}
                className="w-full mb-5 px-5 py-3 rounded-full border-2 border-[#3b0a8a] placeholder:text-[#bcbcd2] focus:outline-none focus:border-[#5b21b6] focus:ring-2 focus:ring-[#5b21b6]/20"
                required
              />

              <input
                name="nome"
                placeholder="Seu nome completo"
                className="w-full mb-5 px-5 py-3 rounded-full border-2 border-[#3b0a8a] placeholder:text-[#bcbcd2] focus:outline-none focus:border-[#5b21b6] focus:ring-2 focus:ring-[#5b21b6]/20"
                required
              />
            </>
          )}

          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              handleEmailChange(e.target.value);
            }}
            placeholder="Seu e-mail"
            className={`w-full mb-2 px-5 py-3 rounded-full border-2 ${
              emailError
                ? 'border-red-500 focus:ring-red-400'
                : 'border-[#3b0a8a] focus:border-[#5b21b6] focus:ring-[#5b21b6]/20'
            } placeholder:text-[#bcbcd2] outline-none focus:ring-2`}
            required
          />
          {emailError && (
            <p className="text-red-500 text-sm mb-3 text-center">
              {emailError}
            </p>
          )}

          <input
            name="senha"
            type="password"
            placeholder="Sua senha"
            className="w-full mb-5 px-5 py-3 rounded-full border-2 border-[#3b0a8a] placeholder:text-[#bcbcd2] focus:outline-none focus:border-[#5b21b6] focus:ring-2 focus:ring-[#5b21b6]/20"
            required
          />

          {mode === 'signup' ? (
            <label className="flex items-start gap-3 text-sm text-black/80 select-none mb-5">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1 size-4 rounded border border-gray-300 accent-pink-500"
                required
              />
              Concordo que li e aceito os{' '}
              <a href="#" className="underline">
                termos
              </a>
            </label>
          ) : (
            <label className="flex items-start gap-3 text-sm text-black/80 select-none mb-5">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1 size-4 rounded border border-gray-300 accent-pink-500"
              />
              Mantenha-me logado
            </label>
          )}

          <button
            type="submit"
            disabled={!!successMsg} // impede reenvio enquanto mostra sucesso
            className="w-full h-12 rounded-full bg-[#ffd000] hover:bg-[#ffcd00]/90 active:translate-y-[1px] transition font-semibold text-black"
          >
            {mode === 'signup' ? 'Cadastre-se' : 'Acesse sua conta'}
          </button>

          <p className="text-center text-sm text-gray-500 mt-6">
            {mode === 'signup' ? (
              <>
                Já possui conta?{' '}
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-[#ef476f] underline"
                >
                  Fazer login
                </button>
              </>
            ) : (
              <>
                Não tem uma conta?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className="text-[#ef476f] underline"
                >
                  Cadastre-se
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
