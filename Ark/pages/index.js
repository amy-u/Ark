import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Ark</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to Ark!
        </h1>

        {/* Need button link to Medical/Vet */}

        <p>
          Reminders for all your pets needs
        </p>

        <div>
          {/* Pet information Card */}
            <h4>Your kids</h4>
            {/* Pet name here */}
            <h3>Jack</h3>
            <p>
              <Image
                src="/dogProfile.jpg"
                alt="Picture of pet"
                width={500}
                height={500}
              />
             </p>
             <p>
               <h4>Date of Birth:</h4>
               <h4>Allergies/ food sensitivity:</h4>
             </p>
             <p>
               <h4>Favorite food:</h4>
               <h4>Hates Food:</h4>
             </p>

             {/* Needs an edit button to form*/}

        </div>

        <div>
          {/* Pet Logs */}



        </div>
      </main>

    </div>
  )
}
