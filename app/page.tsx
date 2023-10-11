import { Lora } from 'next/font/google';

const lora = Lora({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="global-container py-5">
      <div>
        <p className="text-center text-[17px] font-medium">$REKT whitepaper</p>
        <p
          className={`${lora.className} text-right text-[17px] mt-[10%] font-medium`}
        >
          October 19, 2023
        </p>
      </div>

      <div className="pt-[35%]">
        <div className="flex space-x-4 font-semibold">
          <p className={`${lora.className} text-[17px]`}>1.</p>
          <p className={`${lora.className} text-[17px]`}>Get $REKT</p>
        </div>
        <div className="flex space-x-4 font-semibold">
          <p className={`${lora.className} text-[17px]`}>2.</p>
          <p className={`${lora.className} text-[17px]`}>.Repeat Step 1</p>
        </div>
        <div className="flex space-x-4 font-semibold">
          <p className={`${lora.className} text-[17px]`}>3.</p>
          <p className={`${lora.className} text-[17px]`}>???</p>
        </div>
      </div>
    </main>
  );
}
