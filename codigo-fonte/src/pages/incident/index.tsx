import { useParams } from 'react-router-dom';
import './style.css';

const IncidentPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="mb-5">
        <h1 className="text-xl text-rose-600 font-bold">Rua alagada</h1>
        <p className="text-sm">&#x1F4CD; Rua universo (Santa Lucia)</p>
      </div>
      <img
        src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2021/02/whatsapp-image-2021-02-26-at-075827.jpeg"
        alt=""
        className="incident-image"
      />
      <p className=" py-5 px-10 mb-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s
      </p>

      <div className="flex gap-3 justify-between">
        <span>Cidadão: Isabella A.</span>
        <span>Horário de alerta: 21h42</span>
        <span>Atualizado em: 22h12</span>
      </div>
    </div>
  );
};

export default IncidentPage;
