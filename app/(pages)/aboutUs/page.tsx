import React from 'react'

type Props = {}

function AboutUs({}: Props) {
  return (
    <div className="bg-gray-100 py-5 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About MyClean</h1>
        <p className="text-lg text-gray-600 mb-4">
          MyClean is at the forefront of revolutionizing urban waste management. Founded in 2023, we’ve developed an innovative mobile application that seamlessly connects city residents with local waste collection services.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Our platform addresses one of the most pressing challenges in urban areas today: efficient and timely trash collection. By leveraging technology, we’ve created a solution that not only simplifies waste disposal for residents but also optimizes routes for collection services, resulting in cleaner streets and healthier communities.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          At MyClean, we understand that effective waste management is about more than just collecting trash. It’s about creating a sustainable system that encourages responsible disposal habits, reduces environmental impact, and improves urban living conditions. 
        </p>
        <p className="text-lg text-gray-600 mb-4">
          That’s why we’ve incorporated features like a reward system to incentivize regular use and a referral program to expand our community of environmentally conscious users.
        </p>
        <p className="text-lg text-gray-600">
          As we continue to grow, MyClean remains committed to our core mission: empowering urban communities to take control of their waste management, one pickup at a time. We envision a future where every city benefits from cleaner streets, reduced health risks, and a more engaged citizenry, all thanks to smarter waste management solutions.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
