"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl scroll-mt-4 overflow-hidden px-5 py-16 md:px-8 md:py-8"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[450px] w-[450px] rounded-full bg-white/5 blur-[140px] md:h-[900px] md:w-[900px] md:blur-[220px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-0 md:px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="text-[11px] uppercase tracking-[0.45em] text-white/40 md:text-sm">
            Contact
          </p>

          <h2 className="mt-5 text-4xl font-extralight leading-tight sm:text-5xl md:mt-6 md:text-7xl">
            Let's Build
            <br />
            Something Extraordinary
          </h2>

          <p className="mx-auto mt-6 max-w-3xl px-2 text-base leading-8 text-white/55 sm:text-lg md:mt-8 md:px-0 md:text-xl md:leading-9">
            Whether you're planning a luxury residence,
            commercial building or architectural concept,
            let's create something timeless together.
          </p>

        </div>

        {/* CTA */}

        <div className="mt-10 flex justify-center md:mt-4">

          <a
            href="https://cal.com/sohelshaikh0607"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-base backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/35 hover:bg-white/[0.06] hover:shadow-[0_0_45px_rgba(255,255,255,0.12)] md:mt-14 md:px-10 md:py-5 md:text-lg"
          >
            Book a Free Call →
          </a>

        </div>

        {/* Contact Cards */}

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-8">

          {/* WhatsApp */}

          <a
            href="https://wa.me/919834350191?text=Hi%20Sohel,%20I%20visited%20your%20portfolio."
            target="_blank"
            className="group rounded-[24px] border border-white/10 bg-white/[0.02] p-7 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-white/25 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] md:rounded-[30px] md:p-10"
          >

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 text-3xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 md:h-20 md:w-20 md:text-4xl">
              💬
            </div>

            <h3 className="mt-6 text-2xl font-light md:mt-8 md:text-3xl">
              WhatsApp
            </h3>

            <p className="mt-3 leading-7 text-white/55 md:mt-4 md:leading-8">
              Chat instantly about your project or consultation.
            </p>
          </a>
                    {/* Instagram */}

                    <a
            href="https://instagram.com/shaikhinfra_official"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[24px] border border-white/10 bg-white/[0.02] p-7 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-white/25 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] md:rounded-[30px] md:p-10"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 text-3xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 md:h-20 md:w-20 md:text-4xl">
              📷
            </div>

            <h3 className="mt-6 text-2xl font-light md:mt-8 md:text-3xl">
              Instagram
            </h3>

            <p className="mt-3 leading-7 text-white/55 md:mt-4 md:leading-8">
              Explore the latest architectural work.
            </p>

          </a>

          {/* Email */}

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=soyushaikh226@gmail.com&su=Opportunity%20Discussion&body=Hello%20Sohel%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20potential%20opportunity.%0A%0A%5BAdd%20your%20thoughts%20here%5D%0A%0ABest%20Regards%2C%0A%5BYour%20Name%5D"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[24px] border border-white/10 bg-white/[0.02] p-7 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-white/25 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] md:rounded-[30px] md:p-10"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 text-3xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 md:h-20 md:w-20 md:text-4xl">
              ✉️
            </div>

            <h3 className="mt-6 text-2xl font-light md:mt-8 md:text-3xl">
              Email
            </h3>

            <p className="mt-3 leading-7 text-white/55 md:mt-4 md:leading-8">
              Send drawings, inquiries or project details.
            </p>

          </a>

        </div>

        {/* Divider */}

        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:mt-16" />

        {/* Footer */}

        <div className="mt-8 text-center md:mt-10">

          <p className="text-[10px] uppercase tracking-[0.28em] text-white/40 md:text-base md:tracking-[0.35em]">
            Architect • Civil Engineer • Designer
          </p>

          <p className="mt-3 text-xs text-white/25 md:mt-2 md:text-sm">
            © 2026 Shaikh Infrastructure. All Rights Reserved.
          </p>

        </div>

      </div>

    </section>
  );
}