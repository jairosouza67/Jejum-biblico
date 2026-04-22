import Link from 'next/link'

export const metadata = {
  title: 'Política de privacidade — Jejum Bíblico na Prática',
}

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-brand-cream py-20 px-6">
      <div className="max-w-[900px] mx-auto">
        <Link href="/" className="text-brand-forest hover:text-brand-gold text-sm underline underline-offset-4">
          ← Voltar para o início
        </Link>
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-forest mt-6 mb-8">Política de privacidade</h1>
        <div className="prose prose-lg max-w-none text-brand-forest-dark/85 space-y-4 leading-relaxed">
          <p>
            Respeitamos a sua privacidade. As informações fornecidas durante a compra do ebook
            <strong> Jejum Bíblico na Prática</strong> são utilizadas exclusivamente para a
            entrega do produto e envio de comunicações diretamente relacionadas.
          </p>
          <p>
            Não compartilhamos dados com terceiros para fins comerciais. Você pode, a qualquer
            momento, solicitar a exclusão dos seus dados enviando um e-mail para o endereço de
            contato disponível no rodapé.
          </p>
          <p>
            Utilizamos cookies apenas para fins técnicos necessários ao funcionamento do site
            e à análise anonimizada de navegação.
          </p>
        </div>
      </div>
    </main>
  )
}
