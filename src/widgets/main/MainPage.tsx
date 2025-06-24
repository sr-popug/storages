import ContactData from '@/shared/ui/ContactData/ContactData'
import Describe from './ui/Describe'
import Dignities from './ui/Dignities'
import MainScreen from './ui/MainScreen'
import Photos from './ui/Photos'
import Reviews from './ui/Reviews'

export default function MainPage() {
  return (
    <>
      <MainScreen />
      <Dignities />
      <Photos />
      <Describe />
      <Reviews />
      <ContactData />
    </>
  )
}
