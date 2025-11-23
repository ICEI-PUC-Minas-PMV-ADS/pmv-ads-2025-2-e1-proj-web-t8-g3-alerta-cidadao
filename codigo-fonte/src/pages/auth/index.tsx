import React, { useState } from 'react';
import { validateEmail } from 'utils/validateEmail';
import { formatCPF } from 'utils/formatCPF';

import { registerUser, loginUser } from 'utils/auth';
import { useNavigate } from 'react-router-dom';

export default function AuthScreens() {
  const [mode, setMode] = useState<'signup' | 'login'>('login');

  // CAMPOS
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [senha, setSenha] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const navigate = useNavigate();

  // --- Format CPF ---
  const handleCpfChange = (value: string) => {
    setCpf(formatCPF(value));
  };

  // --- Validate Email ---
  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  // --- SUBMIT FORM ---
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // ---------- CADASTRO ----------
    if (mode === 'signup') {
      if (emailError) {
        return alert('Corrija os campos destacados antes de continuar.');
      }

      try {
        registerUser({
          name,
          email,
          cpf,
          password: senha,
        });

        setSuccessMsg('Cadastro realizado com sucesso! Redirecionando...');
        setTimeout(() => {
          setMode('login');
          setSuccessMsg('');
        }, 1500);
      } catch (err: any) {
        alert(err.message);
      }
      return;
    }

    // ---------- LOGIN ----------
    if (mode === 'login') {
      const user = loginUser(email, senha);
      if (!user) {
        return alert('Email ou senha incorretos.');
      }

      navigate('/'); // 🔥 redireciona para Home
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1f2f6]">
      <div className="bg-white rounded-[28px] shadow-lg border border-black/10 p-10 w-full max-w-md relative">
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-4 ring-[#0ea5e9] -z-10" />

        <h1 className="text-4xl font-extrabold text-black text-center mb-8">
          {mode === 'signup' ? 'Cadastro' : 'Login'}
        </h1>

        {/* Sucesso */}
        {successMsg && (
          <div className="mb-5 p-3 rounded-lg text-center text-green-800 bg-green-100 border border-green-400">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* CAMPOS ESPECÍFICOS DO CADASTRO */}
          {mode === 'signup' && (
            <>
              <input
                name="cpf"
                value={cpf}
                onChange={(e) => handleCpfChange(e.target.value)}
                placeholder="Seu CPF"
                maxLength={14}
                className="w-full mb-5 px-5 py-3 rounded-full border-2 border-[#3b0a8a] placeholder:text-[#bcbcd2] focus:outline-none"
                required
              />

              <input
                name="nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome completo"
                className="w-full mb-5 px-5 py-3 rounded-full border-2 border-[#3b0a8a] placeholder:text-[#bcbcd2] focus:outline-none"
                required
              />
            </>
          )}

          {/* EMAIL */}
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            placeholder="Seu e-mail"
            className={`w-full mb-2 px-5 py-3 rounded-full border-2 ${
              emailError
                ? 'border-red-500 focus:ring-red-400'
                : 'border-[#3b0a8a] focus:border-[#5b21b6]'
            } placeholder:text-[#bcbcd2] outline-none focus:ring-2`}
            required
          />

          {emailError && (
            <p className="text-red-500 text-sm mb-3 text-center">
              {emailError}
            </p>
          )}

          {/* SENHA */}
          <input
            name="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Sua senha"
            className="w-full mb-5 px-5 py-3 rounded-full border-2 border-[#3b0a8a] placeholder:text-[#bcbcd2]"
            required
          />

          {/* Termos / Mantenha-me logado */}
          {mode === 'signup' ? (
            <label className="flex items-start gap-3 text-sm text-black/80 select-none mb-5">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1 size-4 rounded border border-gray-300 accent-pink-500"
                required
              />
              Aceito os <a className="underline">termos</a>
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

          {/* BOTÃO */}
          <button
            type="submit"
            disabled={!!successMsg}
            className="w-full h-12 rounded-full bg-[#ffd000] hover:bg-[#ffcd00]/90 transition font-semibold text-black"
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
