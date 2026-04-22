import Link from 'next/link'

export const metadata = {
  title: 'Termos de uso — Jejum Bíblico na Prática',
}

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-brand-cream py-20 px-6">
      <div className="max-w-[900px] mx-auto">
        <Link href="/" className="text-brand-forest hover:text-brand-gold text-sm underline underline-offset-4">
          ← Voltar para o início
        </Link>
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-forest mt-6 mb-8">Termos de uso</h1>
        <div className="prose prose-lg max-w-none text-brand-forest-dark/85 space-y-4 leading-relaxed">
          <p>
            Ao adquirir o ebook <strong>Jejum Bíblico na Prática</strong>, você concorda com os
            termos descritos nesta página. O conteúdo é destinado ao uso pessoal, com
            finalidade informativa e de edificação espiritual.
          </p>
          <p>
            É proibida a reprodução, distribuição ou revenda do material, total ou parcial,
            sem autorização expressa. O acesso é liberado imediatamente após a confirmação do
            pagamento.
          </p>
          <p>
            Dúvidas, solicitações de reembolso ou suporte podem ser enviadas pelo e-mail de
            contato disponível no rodapé.
          </p>
        </div>
      </div>
    </main>
  )
}
