import ProcessTimeline from '@/components/process/ProcessTimeline'

export default function ConsultingProcessPage() {
  return (
    <div className="pt-20 sm:pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-center mb-4">컨설팅 프로세스</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            바이브코딩의 체계적인 5단계 컨설팅 프로세스를 통해
            고객의 비즈니스 목표를 달성합니다.
          </p>
        </div>
      </section>
      <ProcessTimeline />
    </div>
  )
}