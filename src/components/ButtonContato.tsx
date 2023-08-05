import {SocialIcon} from 'react-social-icons'

export function ButtonContato() {
  return (
    <a
      className='p-3 fixed bottom-7 right-5 gap-2'
      href="https://api.whatsapp.com/send?phone=5518997943842&text=Ol%C3%A1%2C%20vim%20do%20Service%20Silva%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es
      "
    >
      <SocialIcon network='whatsapp'  />
    </a>
  )
}