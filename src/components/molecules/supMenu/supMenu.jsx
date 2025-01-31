import './supMenu.css';
import UserProfile from '../../atoms/supMenu/userProfile.tsx';
import ImagePlaceholder from '../../../assets/images/placeholder_img.png';


export default function SupMenu(){
    return(
        <UserProfile name="Daniel Takeyama" image={ImagePlaceholder}/>
    );
}