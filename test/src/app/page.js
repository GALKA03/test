import Image from 'next/image'
import Form from '@/Components/Form'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  relative ">
  {/* <div
      className="flex flex-col items-center justify-center p-10 w-full z-1"
      style={{
        backgroundImage: `url("/paint.png")`,
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "300px",
      }}
    /> */}
     
     
      <Form /> 
    </main>
  )
}
