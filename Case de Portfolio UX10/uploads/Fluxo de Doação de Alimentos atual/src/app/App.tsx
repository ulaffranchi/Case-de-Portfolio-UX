import { ChevronDown } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Percebe os itens em casa",
    description:
      "Ao mexer na despensa ou geladeira, nota por acaso itens parados ou perto de vencer. Não há nenhum aviso — ela só descobre olhando.",
    friction: "Muitos itens vencem sem ela perceber.",
  },
  {
    number: 2,
    title: "Decide doar em vez de descartar",
    description:
      "Apesar da boa intenção, ela não sabe se o item ainda serve para doação, nem para quem ou onde levá-lo.",
    friction: "Incerteza paralisa a ação.",
  },
  {
    number: 3,
    title: "Pesquisa onde doar",
    description:
      "Recorre ao Google, Instagram, grupos de WhatsApp e pergunta a conhecidos. Só encontra informação dispersa, genérica e desatualizada.",
    friction: "Esforço e tempo desperdiçados sem resultado confiável.",
  },
  {
    number: 4,
    title: "Confere regras, horário e endereço",
    description:
      "Tenta descobrir se a ONG aceita aquele tipo de item, que horas abre e onde fica. Regras pouco claras e medo de fazer a viagem à toa.",
    friction: "Falta de clareza gera hesitação.",
  },
  {
    number: 5,
    title: "Tenta entrar em contato",
    description:
      "Liga ou manda mensagem para confirmar antes de ir. Ninguém atende, WhatsApp sem resposta, demora para ouvir algo.",
    friction: "Silêncio desgasta a motivação.",
  },
  {
    number: 6,
    title: "Separa os itens e planeja a logística",
    description:
      "Checa validade manualmente, organiza os itens e tenta encaixar na rotina um horário e um meio de transporte.",
    friction: "Exige tempo e deslocamento — geralmente de carro.",
  },
  {
    number: 7,
    title: "Desloca-se e entrega",
    description:
      "Vai até o local e entrega os itens correndo o risco de chegar e encontrar tudo fechado ou o endereço errado.",
    friction: "Sem garantia de recebimento.",
  },
  {
    number: 8,
    title: "Vai embora sem retorno",
    description:
      "Entrega e pronto. Não há comprovante, registro nem feedback do impacto. Nada a incentiva a repetir.",
    friction: "Sem memória, sem recorrência, sem sensação de impacto.",
  },
];

function StepCard({ step }: { step: (typeof steps)[0] }) {
  return (
    <div
      className="w-full bg-card border border-border rounded-xl px-6 py-5"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
          style={{ background: "#E8E2D5", color: "#7C7166" }}
        >
          {step.number}
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="text-base font-semibold text-card-foreground leading-snug mb-1"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            {step.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            {step.description.replace(/\s*—\s*/g, " ")}
          </p>
          <div
            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md"
            style={{
              background: "#FAE8E4",
              color: "#B83A24",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#B83A24",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {step.friction}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen px-4 py-14"
      style={{ fontFamily: "'Poppins', sans-serif", background: "#EDEAF8" }}
    >
      <div className="max-w-[600px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span
            className="inline-block text-xs font-semibold rounded-full px-3 py-1 mb-4"
            style={{ background: "#EAE5FF", color: "#6C5CE7" }}
          >
            Sem o FoodFlow
          </span>
          <h1
            className="text-3xl font-bold leading-tight mb-3"
            style={{ color: "#1A1535", fontFamily: "'Poppins', sans-serif" }}
          >
            A jornada de doação
            <br />
            <span style={{ color: "#6C5CE7" }}>da Mariana</span>
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "#6B6893" }}>
            8 etapas. Sem apoio. Sustentadas apenas pela iniciativa pessoal
            e com pontos de atrito onde a maioria das pessoas desiste.
          </p>
        </div>

        {/* Flow */}
        <div className="flex flex-col items-center">
          {steps.map((step, i) => (
            <div key={step.number} className="w-full flex flex-col items-center">
              <StepCard step={step} />
              {i < steps.length - 1 && (
                <div className="flex flex-col items-center py-1">
                  <ChevronDown
                    size={20}
                    strokeWidth={1.5}
                    style={{ color: "#A89FD8" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Result */}
        <div
          className="mt-8 rounded-2xl px-6 py-5"
          style={{
            background: "linear-gradient(135deg, #6C5CE7 0%, #8B7CF6 100%)",
          }}
        >
          <p
            className="text-xs font-semibold uppercase mb-2 tracking-widest"
            style={{ color: "rgba(255,255,255,0.65)", letterSpacing: "0.1em" }}
          >
            Resultado
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#FFFFFF" }}>
            Processo demorado e trabalhoso, sustentado só pela iniciativa da
            pessoa. A maioria abandona o processo e o alimento acaba no lixo.{" "}
            <strong>Sem memória, sem recorrência, sem sensação de impacto.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
