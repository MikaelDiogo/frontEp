
/* 
const FilterCheck = document.getElementById('filterBtn')

export function isCheckd(){
    const Filtered = document.getElementById('Units')

     Filtered?.classList.toggle('active')

}

    FilterCheck?.addEventListener('click',isCheckd)    */


    




    

    const CheckBox = document.getElementById('checkBox')
export function CheckTruePS(){
    const FilteredPS = document.getElementById('PostoS')
    const FilteredPS2 = document.getElementById('PostoS2')
    const FilteredPS3 = document.getElementById('PostoS3')
    const FilteredPS4 = document.getElementById('PostoS4')
   
     FilteredPS?.classList.toggle('active')
     FilteredPS2?.classList.toggle('active')
     FilteredPS3?.classList.toggle('active')
     FilteredPS4?.classList.toggle('active')
    
        
      
    }
    CheckBox?.addEventListener('click',CheckTruePS)

    const CheckBox2 = document.getElementById('checkBox2')
    export function CheckTrueH(){
        const FilteredH = document.getElementById('Hospital')
        const FilteredH2 = document.getElementById('Hospital2')
        const FilteredH3= document.getElementById('Hospital3')
         FilteredH?.classList.toggle('active')
         FilteredH2?.classList.toggle('active')
         FilteredH3?.classList.toggle('active') 

        }
        CheckBox2?.addEventListener('click',CheckTrueH)

        const CheckBox3 = document.getElementById('checkBox3')
        export function CheckTrueLab(){
            const FilteredLab = document.getElementById('checkBox3')
        
             FilteredLab?.classList.toggle('active')
              
            }
            CheckBox3?.addEventListener('click',CheckTrueLab)

            const CheckBox4 = document.getElementById('checkBox4')
            export function CheckTrueC(){
                const FilteredC = document.getElementById('ClinicaM')
                const FilteredC2 = document.getElementById('ClinicaM2')
                 FilteredC?.classList.toggle('active')
                 FilteredC2?.classList.toggle('active')
                  
                }
                CheckBox4?.addEventListener('click',CheckTrueC)


      //  const bimgChange = document.querySelector('#ubsVenancios')
        //const imagem = document.querySelector('#iFrameMap')

        //bimgChange?.addEventListener( 'click',  function changeMap() {

          //      imagem?.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15893.993255157773!2d-40.666549644580044!3d-5.184052399999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x796f58505c7cbbf%3A0x2202039e6e510fd3!2sUnidade%20B%C3%A1sica%20de%20Sa%C3%BAde%20-%20Ven%C3%A2ncios!5e0!3m2!1spt-BR!2sbr!4v1687044171695!5m2!1spt-BR!2sbr")
            //})
        
            const bimgChange = document.querySelector('#PostoS')
        export function changeMap(){
            const imagem = document.querySelector('#iFrameMap')
                imagem?.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15893.993255157773!2d-40.666549644580044!3d-5.184052399999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x796f58505c7cbbf%3A0x2202039e6e510fd3!2sUnidade%20B%C3%A1sica%20de%20Sa%C3%BAde%20-%20Ven%C3%A2ncios!5e0!3m2!1spt-BR!2sbr!4v1687044171695!5m2!1spt-BR!2sbr")
        }    
        
        bimgChange?.addEventListener('click', changeMap)

        
        const b2imgChange = document.querySelector('#PostoS2')
        export function changeMap2(){
            const imagem2 = document.querySelector('#iFrameMap')
            imagem2?.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.53126504835!2d-40.66942951114503!3d-5.1788127000000035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x796f5c7ff136af7%3A0x3ce143fc6dbe7239!2sPSF%20-%20Centro%5CS%C3%A3o%20Vicente!5e0!3m2!1spt-BR!2sbr!4v1687045688603!5m2!1spt-BR!2sbr")
        }
       

        b2imgChange?.addEventListener( 'click', changeMap2)
            
           
    
            

        const bimg12Change = document.querySelector('#PostoS3')
        export function changeMap11(){
            const imagem12 = document.querySelector('#iFrameMap')
            imagem12?.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5222062788666!2d-40.67914582618798!3d-5.180253694797187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x796f434dd7a2c7f%3A0x971add21faf8e05!2sPSF%20F%C3%81TIMA%20I!5e0!3m2!1spt-BR!2sbr!4v1687047166432!5m2!1spt-BR!2sbr" )
        }
        

        bimg12Change?.addEventListener( 'click', changeMap12)
            
           
        
        
        const b3imgChange = document.querySelector('#Hospital')
        export function changeMap3(){
            const imagem3 = document.querySelector('#iFrameMap')
            imagem3?.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63576.35529993848!2d-40.748668678320335!3d-5.180253700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x796f434dd7a2c7f%3A0x971add21faf8e05!2sPSF%20F%C3%81TIMA%20I!5e0!3m2!1spt-BR!2sbr!4v1687045828096!5m2!1spt-BR!2sbr")
        }
        

        b3imgChange?.addEventListener( 'click', changeMap3)
            
           
    
        const b4imgChange = document.querySelector('#Hospital')
        export function changeMap4(){
            const imagem4 = document.querySelector('#iFrameMap')
            imagem4?.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63577.3866219922!2d-40.70802595619449!3d-5.169991594059957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x796f5afda5b1d45%3A0x23d4a5d217990c6!2sUPA%2024h%20-%20Unidade%20de%20Pronto%20Atendimento%20-%20Crate%C3%BAs!5e0!3m2!1spt-BR!2sbr!4v1687045959548!5m2!1spt-BR!2sbr")
        }
        

        b4imgChange?.addEventListener( 'click', changeMap4)
            
           
        
        const b5imgChange = document.querySelector('#PostoS4')
        export function changeMap5(){
            const imagem5 = document.querySelector('#iFrameMap')
            imagem5?.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.4334294031464!2d-40.67009392618785!3d-5.194354494783216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x796f5d7cda1ad8b%3A0x1cfe7fbb4e87e81!2sPSF.%20Marat%C3%B5an!5e0!3m2!1spt-BR!2sbr!4v1687125792183!5m2!1spt-BR!2sbr" )
        }
        

        b5imgChange?.addEventListener( 'click', changeMap5)
            
           
        
        const b6imgChange = document.querySelector('#upaDrOlavo')
        export function changeMap6(){
            const imagem6 = document.querySelector('#iFrameMap')
            imagem6?.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035463.7325316023!2d-41.71070241860038!3d-4.852971864675713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x796f5af98a1c127%3A0x16324b1086ace48c!2sUPA%20DR%20OLAVO%20CAVALCANTE%20CARDOSO!5e0!3m2!1spt-BR!2sbr!4v1687046430263!5m2!1spt-BR!2sbr")
        }
        

        b6imgChange?.addEventListener( 'click', changeMap6)
            
           
        
        const b7imgChange = document.querySelector('#quize')
        export function changeMap7(){
            const imagem7 = document.querySelector('#iFrameMap')
            imagem7?.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5596221666992!2d-40.66976292618795!3d-5.174299294803118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x796f5165550f2cd%3A0x1db04f5a157fe4ed!2s15a%20CRES!5e0!3m2!1spt-BR!2sbr!4v1687046632718!5m2!1spt-BR!2sbr" )
        }
        

        b7imgChange?.addEventListener( 'click', changeMap7)
            
           
        
        const b8imgChange = document.querySelector('#ClinicaM2')
        export function changeMap8(){
            const imagem8 = document.querySelector('#iFrameMap')
            imagem8?.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5590500414623!2d-40.668773426187975!3d-5.174390394803019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x796f5b0b3c00001%3A0x7bd1ce98d990377a!2zUG9saW3DqWRpY2EgQ3JhdGXDunM!5e0!3m2!1spt-BR!2sbr!4v1687125964554!5m2!1spt-BR!2sbr" )
        }
       

        b8imgChange?.addEventListener( 'click', changeMap8)
            
          
    
        const b9imgChange = document.querySelector('#clean')
        export function changeMap9(){
            const imagem9 = document.querySelector('#iFrameMap')
            imagem9?.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15894.17787800674!2d-40.6764856416334!3d-5.176711527281216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spontos%20de%20saude%20em%20crateus!5e0!3m2!1spt-BR!2sbr!4v1687128253983!5m2!1spt-BR!2sbr"  )
        }
        

        b9imgChange?.addEventListener( 'click', changeMap9)
        
           
    
        const b10imgChange = document.querySelector('#Hospital2')
        export function changeMap10(){
            const imagem10 = document.querySelector('#iFrameMap')
            imagem10?.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.4941413383876!2d-40.671442511145024!3d-5.184715500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x796f54084a7de37%3A0x5dfb734b241b8b4f!2sUNIMED%20CRATE%C3%9AS!5e0!3m2!1spt-BR!2sbr!4v1687126324070!5m2!1spt-BR!2sbr"  )
        }
      

        b10imgChange?.addEventListener( 'click', changeMap10)
            
          
        
        const b11imgChange = document.querySelector('#Hospital3')
        export function changeMap12(){
            const imagem11 = document.querySelector('#iFrameMap')
            imagem11?.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5068477242235!2d-40.66974782618791!3d-5.182695894794778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x796f5cf310c7f11%3A0xa4697cc0420fa96d!2sHospital%20de%20Refer%C3%AAncia%20S%C3%A3o%20Lucas!5e0!3m2!1spt-BR!2sbr!4v1687126517965!5m2!1spt-BR!2sbr"  )

        }
        
        b11imgChange?.addEventListener( 'click', changeMap11)
            
            
        const b15imgChange = document.querySelector('#Laboratorio1')
        export function changeMap15(){
            const imagem15 = document.querySelector('#iFrameMap')
            imagem15?.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5068477242235!2d-40.66974782618791!3d-5.182695894794778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x796f5cf310c7f11%3A0xa4697cc0420fa96d!2sHospital%20de%20Refer%C3%AAncia%20S%C3%A3o%20Lucas!5e0!3m2!1spt-BR!2sbr!4v1687126517965!5m2!1spt-BR!2sbr"  )

        }
        
        b15imgChange?.addEventListener( 'click', changeMap15)
            
        const b16imgChange = document.querySelector('#Laboratorio2')
        export function changeMap16(){
            const imagem16 = document.querySelector('#iFrameMap')
            imagem16?.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5068477242235!2d-40.66974782618791!3d-5.182695894794778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x796f5cf310c7f11%3A0xa4697cc0420fa96d!2sHospital%20de%20Refer%C3%AAncia%20S%C3%A3o%20Lucas!5e0!3m2!1spt-BR!2sbr!4v1687126517965!5m2!1spt-BR!2sbr"  )

        }
        
        b16imgChange?.addEventListener( 'click', changeMap16)
            
            
        

     const bClean = document.getElementById("cleanF")
     export function cleanFilter(){
            const imagem0 = document.querySelector('#iFrameMap')
               imagem0?.setAttribute("src ", "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15894.17787800674!2d-40.6764856416334!3d-5.176711527281216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spontos%20de%20saude%20em%20crateus!5e0!3m2!1spt-BR!2sbr!4v1687128253983!5m2!1spt-BR!2sbr" )
            }

                bClean?.addEventListener('click',cleanFilter)