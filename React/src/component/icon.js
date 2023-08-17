import Boxes from '@mui/material/Box';
import Forms from 'react-bootstrap/Form';
import checkboxes from '@mui/material/Checkbox';
import MuiInputLabel from '@mui/material/InputLabel';
import MenuItems from '@mui/material/MenuItem';
import FormControls from '@mui/material/FormControl';
import SelectBox from '@mui/material/Select'
import Replay from '@mui/icons-material/ReplyAllOutlined';
import PatternIcons from '@mui/icons-material/Pattern';
import BtnSaveIcon from '@mui/icons-material/SaveAltOutlined';
import PeopleAltOutlinedIcons from '@mui/icons-material/PeopleAltOutlined';
import EmailSendIcon from '@mui/icons-material/AlternateEmailOutlined';
import WifiIcon from '@mui/icons-material/WifiCalling3Outlined';
import ChangeCircleOutlinedIcons from '@mui/icons-material/ChangeCircleOutlined';
import ContactIcon from '@mui/icons-material/ContactsOutlined';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import AddNewPerson from '@mui/icons-material/PersonAddAltTwoTone';
import Identity from '@mui/icons-material/PermIdentityOutlined';
import Vpn from '@mui/icons-material/VpnKeyOutlined';
import ControlsCameraIcon from '@mui/icons-material/ControlCamera';
import Handshake from "@mui/icons-material/SensorOccupiedOutlined";
import ProfilePageIcon from "@mui/icons-material/ContactPageOutlined";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import AddPersonIcon from "@mui/icons-material/PersonAddAltOutlined";
import { Stack } from '@mui/material';
import { BadgeOutlined, ToggleOffOutlined, ThumbUpAltOutlined, PersonAddAltTwoTone, SensorOccupiedOutlined, } from "@mui/icons-material";
import {
    CropOriginalOutlined as CropOriginalOutlinedIcon,
    ToggleOffOutlined as ToggleOffOutlinedIcon,
    MarkEmailReadOutlined as MarkEmailReadOutlinedIcon,
    PhoneCallbackOutlined as PhoneCallbackOutlinedIcon,
    ThumbUpAltOutlined as ThumbUpAltOutlinedIcon,
    BadgeOutlined as BadgeOutlinedIcon,
} from '@mui/icons-material';











export const Box = Boxes;
export const Form = Forms;
export const EyeIcon = faEye;
export const Select = SelectBox;
export const DeleteIcon = faTrash;
export const VpnKeyOutlinedIcon = Vpn;
export const PensileIcon = faPencilAlt;
export const PatternIcon = PatternIcons;
export const ReplyAllOutlinedIcon = Replay;
export const HandshakeRoundedIcon = Handshake;
export const PermIdentityOutlinedIcon = Identity;
export const Stacks = Stack;
export const MenuItem = MenuItems;
export const Checkbox = checkboxes;
export const InputLabel = MuiInputLabel;
export const FormControl = FormControls;
export const FontAwesome = FontAwesomeIcon;
export const LogoutOutlinedIcon = LogoutIcon;
export const SaveAltOutlinedIcon = BtnSaveIcon;
export const ContactsOutlinedIcon = ContactIcon;
export const WifiCalling3OutlinedIcon = WifiIcon;
export const PersonAddAltTwoToneIcon = AddNewPerson;
export const ControlCameraIcon = ControlsCameraIcon;
export const PersonAddAltOutlinedIcon = AddPersonIcon;
export const ContactPageOutlinedIcon = ProfilePageIcon;
export const AlternateEmailOutlinedIcon = EmailSendIcon;
export const PeopleAltOutlinedIcon = PeopleAltOutlinedIcons;
export const ChangeCircleOutlinedIcon = ChangeCircleOutlinedIcons;
export { BadgeOutlined, ToggleOffOutlined, ThumbUpAltOutlined, PersonAddAltTwoTone, SensorOccupiedOutlined, };
export { CropOriginalOutlinedIcon, ToggleOffOutlinedIcon, MarkEmailReadOutlinedIcon, PhoneCallbackOutlinedIcon, ThumbUpAltOutlinedIcon, BadgeOutlinedIcon, };

// SVG Icon Store Hear
export const DashboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" ><path d="m11.6 11c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-2.092 0-6.908 0-9zm9.4 6c0-.552-.448-1-1-1h-6c-.538 0-1 .477-1 1v3c0 .552.448 1 1 1h6c.552 0 1-.448 1-1zm-1.5.5v2h-5v-2zm-9.4-6v8h-5.6v-8zm10.9-7.5c0-.552-.448-1-1-1-1.537 0-4.463 0-6 0-.552 0-1 .448-1 1v9.6c0 .552.448 1 1 1h6c.552 0 1-.448 1-1 0-2.194 0-7.406 0-9.6zm-1.5.5v8.6h-5v-8.6zm-7.9-.5c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v3.6c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-1.017 0-2.583 0-3.6zm-1.5.5v2.6h-5.6v-2.6z" fillRule="nonzero" /> </svg>
);
export const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3,21c0,0.553,0.448,1,1,1h16c0.553,0,1-0.447,1-1v-1c0-3.714-2.261-6.907-5.478-8.281C16.729,10.709,17.5,9.193,17.5,7.5 C17.5,4.468,15.032,2,12,2C8.967,2,6.5,4.468,6.5,7.5c0,1.693,0.771,3.209,1.978,4.219C5.261,13.093,3,16.287,3,20V21z M8.5,7.5 C8.5,5.57,10.07,4,12,4s3.5,1.57,3.5,3.5S13.93,11,12,11S8.5,9.43,8.5,7.5z M12,13c3.859,0,7,3.141,7,7H5C5,16.141,8.14,13,12,13z" /></svg>
);
export const RoleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" ><path d="M20.377 11.082c-.06 1.929-2.229 3.126-8.409 3.126-6.193 0-8.358-1.203-8.409-3.139 1.508 0 4.379-1.958 8.409-1.958 3.927-.001 7.144 1.971 8.409 1.971zm-8.408 4.09c-2.062 0-3.74-.131-5.078-.397.062.555.469 3.322 2.409 3.322 1.721 0 1.673-1.316 2.721-1.316 1.047 0 1.169 1.316 2.852 1.316 2.09 0 2.46-3.063 2.494-3.389-1.387.311-3.169.464-5.398.464zm6.405-.741c-.04 2.171-.717 4.769-2.28 6.437-1.048 1.119-2.377 1.687-3.949 1.687-1.575 0-2.897-.533-3.931-1.582-1.646-1.673-2.302-4.345-2.396-6.461-.523-.158-1.01-.347-1.484-.628-.016 2.472.704 5.942 2.821 8.094 1.321 1.341 3 2.022 4.99 2.022 1.972 0 3.712-.745 5.033-2.153 2.131-2.273 2.76-5.679 2.661-8.111-.459.308-.944.521-1.465.695zm.974-11.19s-2.537-.686-7.348-3.241c-4.812 2.555-7.348 3.241-7.348 3.241s-1.295 2.4-3.652 5.016l2.361 1.985c.446-.008 1.355-.362 1.674-.514l-1.952-1.614c.618-.689 1.036-1.267 1.677-2.265.052-.081.14-.134.238-.136s.19.046.243.126l1.81 2.855-1.245-3.784c-.072-.208.016-.438.21-.548.343-.195 3.088-1.083 5.984-2.642 2.896 1.559 5.641 2.447 5.984 2.642.194.11.282.339.21.548l-1.244 3.784 1.81-2.855c.053-.081.145-.128.243-.126s.185.055.237.136c.641.998 1.059 1.576 1.678 2.265l-1.953 1.614c.319.152 1.228.506 1.674.514l2.361-1.985c-2.357-2.616-3.652-5.016-3.652-5.016zm-5.551 2.141c-.202-.54-.087-.71.125-.928l.182-.186c-1.015-.842-.807-.668-1.035-.866-.115.115-.254.296-.516.296-.269 0-.444-.191-.551-.286-.119.102-.295.286-.556.286-.265 0-.409-.189-.512-.292l-1.038.863.182.186c.213.218.327.389.125.928-.18.479-.335.828-.335 1.206 0 .677.442 1.175 1.211 1.368.553.138.637.197.92.422.284-.225.367-.284.92-.422.77-.192 1.211-.691 1.211-1.368.002-.379-.153-.728-.333-1.207zm-1.255.68l.126.721-.66-.34-.659.34.125-.721-.534-.511.738-.105.33-.656.33.656.737.105-.533.511z" /></svg>
);
export const OccupationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" ><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm-7.363 18.764c1.828 1.989 4.451 3.236 7.363 3.236h.004l-4.618-7.998-2.749 4.762zm16.023-1.764h-9.233l2.749 4.762c2.767-.615 5.104-2.378 6.484-4.762zm-18.201-8c-.298.947-.459 1.955-.459 3 0 1.823.489 3.533 1.343 5.005l2.889-5.003-.001-.002.003-.002 1.731-2.998h-5.506zm18.203-1.997l-4.617 7.997h5.496c.298-.947.459-1.955.459-3 0-1.82-.487-3.526-1.338-4.997zm-6.927 1.997h-3.461l-1.733 3.002 1.731 2.998h3.464l1.731-2.999-1.732-3.001zm2.887 1.001l2.747-4.758c-1.828-1.992-4.452-3.242-7.366-3.243l4.619 8.001zm-6.792-7.764c-2.769.613-5.109 2.377-6.49 4.763h9.24l-2.75-4.763z" /></svg>
);
export const BluetoothIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z" /><path d="M11 2h2v10h-2z" /></svg>
);
export const CountryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 18.292v1.834c.644.129 1.177.303 1.496.528.273.192.274.498 0 .69-1.494 1.053-7.498 1.054-8.993 0-.272-.191-.271-.499 0-.69.319-.225.852-.399 1.497-.528v-1.833c-2.363.481-4 1.511-4 2.707 0 1.657 3.134 3 7 3s7-1.343 7-3c0-1.196-1.637-2.226-4-2.708zm7.45-14.94c-2.73 0-2.791-2.352-5.961-2.352-1.382 0-2.679.518-3.489 1.022v-2.022h-2v21h2v-9.122c.934-.553 2.172-1.048 3.5-1.048 2.993 0 3.413 2.237 6.081 2.237 1.058 0 1.914-.415 2.419-.736v-9.779c-.537.342-1.46.8-2.55.8zm.55 4.67c-1.801.486-4.082-1.087-5-1.693v2.671s-1.758-.803-5 .739v-2.901c1.188-1.046 3.292-1.734 5-.508v-2.808c.785.615 2.575 1.737 4.45 1.737.189 0 .372-.012.55-.033v2.796z" /> </svg>
);
export const BellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.094 2.085l-1.013-.082a1.082 1.082 0 0 0-.161 0l-1.063.087C6.948 2.652 4 6.053 4 10v3.838l-.948 2.846A1 1 0 0 0 4 18h4.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5H20a1 1 0 0 0 .889-1.495L20 13.838V10c0-3.94-2.942-7.34-6.906-7.915zM12 19.5c-.841 0-1.5-.659-1.5-1.5h3c0 .841-.659 1.5-1.5 1.5zM5.388 16l.561-1.684A1.03 1.03 0 0 0 6 14v-4c0-2.959 2.211-5.509 5.08-5.923l.921-.074.868.068C15.794 4.497 18 7.046 18 10v4c0 .107.018.214.052.316l.56 1.684H5.388z" /> </svg>
);
export const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" /></svg>
);
export const PreviousIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" ><path id="next" d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fillRule="nonzero" /></svg>
);
export const NextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" ><path id="next" d="m12.017 1.995c5.517 0 9.997 4.48 9.997 9.998s-4.48 9.998-9.997 9.998c-5.518 0-9.998-4.48-9.998-9.998s4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.498-8.497-8.498zm-1.528 4.715s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z" fillRule="nonzero" /></svg>
);                                   