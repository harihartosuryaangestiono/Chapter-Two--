import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { anniversaryConfig } from "@/data/anniversary";
import { Button } from "@/components/ui/Button";
import { Countdown } from "@/components/countdown/Countdown";

export function InvitationCard() {
  return (
    <section className="px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="relative flex flex-col items-center text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f7dde6] px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#80576A]">
            <span>♡</span>
            {anniversaryConfig.coupleNames.primary}
          </div>

          <div className="mb-6 flex items-center justify-center gap-2 text-[#d989a5]">
            <span className="h-px w-10 bg-[#d989a5]/50" />
            <span className="font-script text-3xl">you are cordially invited</span>
            <span className="h-px w-10 bg-[#d989a5]/50" />
          </div>

          <div className="relative mb-8 w-full max-w-3xl">
            <div className="absolute -left-4 top-4 text-4xl text-[#f6dce5]">♡</div>
            <div className="absolute -right-4 top-10 text-3xl text-[#f8e9b8]">✦</div>
            <div className="absolute -left-3 bottom-2 text-3xl text-[#e8e0f5]">✿</div>
            <h2 className="font-display text-5xl leading-[0.95] text-[#80576A] sm:text-6xl md:text-7xl">
              Our 2nd
              <br />
              Anniversary
            </h2>
          </div>

          <p className="mb-8 max-w-xl text-lg text-[#80576A]/75">
            Celebrating two years of us being us.
          </p>

          <div className="mb-8 grid w-full max-w-2xl divide-y divide-[#d989a5]/25 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="p-4">
              <div className="mb-2 flex justify-center text-[#d989a5]">
                <CalendarDays size={18} />
              </div>
              <p className="font-script text-2xl text-[#80576A]">14 Nov</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#80576A]/70">2026</p>
            </div>
            <div className="p-4">
              <div className="mb-2 flex justify-center text-[#d989a5]">
                <span className="text-lg">⏰</span>
              </div>
              <p className="font-script text-2xl text-[#80576A]">16.00</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#80576A]/70">WIB</p>
            </div>
            <div className="p-4">
              <div className="mb-2 flex justify-center text-[#d989a5]">
                <MapPin size={18} />
              </div>
              <Image
                src="/images/picca-steakroom-logo.png"
                alt="Picca Steakroom"
                width={88}
                height={88}
                className="mx-auto h-[88px] w-[88px] rounded-full object-cover"
              />
            </div>
          </div>

          <p className="mb-5 max-w-xl text-lg italic text-[#80576A]/80">
            Your presence is mandatory. No excuses accepted. Hehehe.
          </p>

          <p className="mb-8 font-script text-3xl text-[#c77795]">A little date.</p>

          <Button href={anniversaryConfig.mapsUrl} target="_blank" rel="noreferrer noopener" className="px-8 py-4">
            FIND THE PLACE
          </Button>

          <div className="mt-16 w-full border-t border-[#d989a5]/20 pt-10">
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  );
}
