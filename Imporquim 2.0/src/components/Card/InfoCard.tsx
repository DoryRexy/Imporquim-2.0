import React from 'react';

type Props = {
  clases?: string;
  imagen?: string;
  texto?: string;
  url?: string;
};

export default function InfoCard(props: Props) {
  return (

    <a href={props.url} target="_blank" className={`w-40 h-40 rounded-xl infoCard hover:-translate-y-1 hover:drop-shadow-md duration-300 ${props.clases}`}>
      <div className="h-1/2 flex items-center justify-center">
        <img src={props.imagen} alt="Imagen" className="max-w-full max-h-full" />
      </div>
      <div className="h-1/2 flex items-center justify-center">
        <p className="text-center" dangerouslySetInnerHTML={{ __html: props.texto || '' }} />
      </div>
    </a>

  );
}
