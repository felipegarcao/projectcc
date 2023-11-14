interface Props {
  message: string;
}

export function WhatsAppButton({ message }: Props) {


  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${5518997943842}&text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  }


  return (
    <button
      onClick={handleClick}
      className="bg-green-400 p-3 text-white rounded-md text-center"
      rel="noreferrer"
    >
      Contato por WhatsApp
    </button>
  );
}
