import { useParams, useNavigate } from 'react-router-dom';
import './style.css';

const IncidentPage: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  const allIncidentes: Incident[] = JSON.parse(
    localStorage.getItem('incidentes') || '[]',
  );

  const actualIncident = allIncidentes.find((incident) => {
    return String(incident.id) === String(params.id);
  });

  if (!actualIncident) {
    navigate('/');
    return;
  }

  const { titulo, rua, bairro, cidade, estado, descricao, nome, dataCriacao } =
    actualIncident;

  console.log(actualIncident);

  return (
    <div className="container">
      <div className="mb-5">
        <h1 className="text-xl text-rose-600 font-bold">{titulo}</h1>
        <p className="text-sm">
          &#x1F4CD; {rua} ({bairro} - {cidade}, {estado})
        </p>
      </div>
      <img
        src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2021/02/whatsapp-image-2021-02-26-at-075827.jpeg"
        alt=""
        className="incident-image"
      />
      <h3 className="pt-5 px-10">Descrição</h3>
      <p className="py-3 px-10 mb-2">{descricao}</p>

      <div className="flex gap-3 justify-between">
        <span>Cidadão: {nome}</span>
        <span>Horário de alerta: {formatHourMinute(dataCriacao)}</span>
        <span>Atualizado em: {formatHourMinute(dataCriacao)}</span>
      </div>
    </div>
  );
};

const formatHourMinute = (isoString: string) => {
  const date = new Date(isoString);

  date.setHours(date.getHours() - 3);

  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');

  return `${hh}h${mm}`;
};

export default IncidentPage;
