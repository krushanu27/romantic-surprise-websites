import React from 'react';

const LoveLetterSection = () => {
  return (
    <div className="max-w-2xl mx-auto bg-[#FAFAFA] text-stone-800 p-8 md:p-12 lg:p-16 rounded-sm shadow-2xl relative">
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* Letter Content */}
      <div className="relative z-10 font-serif leading-loose text-lg md:text-xl space-y-6">
        <p className="font-script text-3xl md:text-4xl text-accentRose mb-8">My Dearest,</p>

        <p>
          This letter is not just for our anniversary. It is for everything that brought us here,
          quietly and slowly, in ways neither of us fully understood at the beginning.
        </p>

        <p>
          What we have was never built in a rush. It did not begin with easy certainty, and maybe
          that is why I value it so deeply. I knew from the start that your heart had been through
          a lot, and I never wanted to force my place into it. I only wanted to be someone who
          could stand beside you with honesty, patience, and care.
        </p>

        <p>
          Over time, my feelings for you did not fade or hesitate. They became calmer, stronger,
          and more certain. Not because everything was simple, but because every step toward you
          felt meaningful to me. Even when things were unspoken, even when acceptance took time,
          my choice remained the same.
        </p>

        <p>
          I want you to know this clearly: you have never needed to become someone else for me to
          love you. I do not love you for perfection, for ease, or for some ideal version of what
          love is supposed to look like. I love you for who you are, and I cherish every small
          piece of trust, warmth, and closeness that we continue to build together.
        </p>

        <p>
          On this anniversary, I am not making a loud promise. I am making a quiet one, and I
          think that matters more. I will keep choosing you with respect. I will keep valuing your
          heart gently. I will keep hoping, patiently and sincerely, for our love to grow and cherish the moments we are going to make together.
          Today, Tomorrow and Always🩵🧿.
        </p>

        <p>
          No matter how slowly our story unfolds, it is still the one I am grateful for. And if
          love can be measured in patience, care, and staying when things are not easy, then please
          know this with all certainty:
          <br />
          I am still and always going to choose you no matter what.
        </p>

        <p className="pt-8">
          Forever yours,
          <br />
          <span className="font-script text-3xl md:text-4xl text-accentRose inline-block mt-4 italic">
            Krushanu
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoveLetterSection;