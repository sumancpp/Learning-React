import Section1 from './components/section1/Section1'

const App = () => {

  const users= [
    {

     img:'https://plus.unsplash.com/premium_photo-1661774723035-de53c21c9838?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'',
     color:'blue',
     tag:'Satisfied'

    },

    {

     img:'https://media.istockphoto.com/id/1352606416/photo/young-woman-working-at-home-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=_coyrIdsF1SFgWKuHE_HBswk7gyTUnZp3Edzek0gYY4=',
     intro:'',
     color:'#38BDF8',
     tag:'Underserved'

    },

    {

     img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmclMjBvbiUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D',
     intro:'',
     color:'#34D399',
     tag:'Underbanked'

    },

    {

     img:'https://plus.unsplash.com/premium_photo-1723741360729-ac4889854f66?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'',
      color:'#4C1D95',
     tag:'Consistency'

    },
    
     {

     img:'https://plus.unsplash.com/premium_photo-1661429220160-117e70dd52c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8',
     intro:'',
      color:'#FB7185',
     tag:'Average'

    },
    
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      <Section1 users={users}/>
    </div>
  )
}

export default App
