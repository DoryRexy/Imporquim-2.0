import React from 'react'



type Props = {}

export default function Anuncio({}: Props) {
  return (
    <div>
      
    <section className="backgroundRadialGradient2">
    <div className="px-6 py-12 text-center md:px-12 lg:text-left">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mt-12 lg:mt-0">
            <h1 className="mb-12 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
              Are you ready <br /><span className="text-[hsl(218,81%,75%)]">for an adventure?</span>
            </h1>
            <p className="text-lg text-[hsl(218,81%,95%)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Minima officia consequatur adipisci tenetur repudiandae rerum
              quos.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}