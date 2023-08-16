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
export const Select = SelectBox;
export const EyeIcon = faEye;
export const DeleteIcon = faTrash;
export const PensileIcon = faPencilAlt;
export const MenuItem = MenuItems;
export const Checkbox = checkboxes;
export const InputLabel = MuiInputLabel;
export const FormControl = FormControls;
export const FontAwesome = FontAwesomeIcon;
export const PatternIcon = PatternIcons;
export const ControlCameraIcon = ControlsCameraIcon;
export const SaveAltOutlinedIcon = BtnSaveIcon;
export const ContactsOutlinedIcon = ContactIcon;
export const WifiCalling3OutlinedIcon = WifiIcon;
export const PersonAddAltTwoToneIcon = AddNewPerson;
export const AlternateEmailOutlinedIcon = EmailSendIcon;
export const PeopleAltOutlinedIcon = PeopleAltOutlinedIcons;
export const LogoutOutlinedIcon = LogoutIcon;
export const ContactPageOutlinedIcon = ProfilePageIcon;
export const PersonAddAltOutlinedIcon = AddPersonIcon;
export const VpnKeyOutlinedIcon = Vpn;
export const HandshakeRoundedIcon = Handshake;
export const PermIdentityOutlinedIcon = Identity;
export const ReplyAllOutlinedIcon = Replay;
export const ChangeCircleOutlinedIcon = ChangeCircleOutlinedIcons;
export { BadgeOutlined, ToggleOffOutlined, ThumbUpAltOutlined, PersonAddAltTwoTone, SensorOccupiedOutlined, };
export { CropOriginalOutlinedIcon, ToggleOffOutlinedIcon, MarkEmailReadOutlinedIcon, PhoneCallbackOutlinedIcon, ThumbUpAltOutlinedIcon, BadgeOutlinedIcon, };










// SVG Icon Store Hear

export const DashboardIcon = () => (
    <svg
        clipRule="evenodd"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m11.6 11c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-2.092 0-6.908 0-9zm9.4 6c0-.552-.448-1-1-1h-6c-.538 0-1 .477-1 1v3c0 .552.448 1 1 1h6c.552 0 1-.448 1-1zm-1.5.5v2h-5v-2zm-9.4-6v8h-5.6v-8zm10.9-7.5c0-.552-.448-1-1-1-1.537 0-4.463 0-6 0-.552 0-1 .448-1 1v9.6c0 .552.448 1 1 1h6c.552 0 1-.448 1-1 0-2.194 0-7.406 0-9.6zm-1.5.5v8.6h-5v-8.6zm-7.9-.5c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v3.6c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-1.017 0-2.583 0-3.6zm-1.5.5v2.6h-5.6v-2.6z"
            fillRule="nonzero"
        />
    </svg>
);
export const UserIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path d="M3,21c0,0.553,0.448,1,1,1h16c0.553,0,1-0.447,1-1v-1c0-3.714-2.261-6.907-5.478-8.281C16.729,10.709,17.5,9.193,17.5,7.5 C17.5,4.468,15.032,2,12,2C8.967,2,6.5,4.468,6.5,7.5c0,1.693,0.771,3.209,1.978,4.219C5.261,13.093,3,16.287,3,20V21z M8.5,7.5 C8.5,5.57,10.07,4,12,4s3.5,1.57,3.5,3.5S13.93,11,12,11S8.5,9.43,8.5,7.5z M12,13c3.859,0,7,3.141,7,7H5C5,16.141,8.14,13,12,13z" />
    </svg>

);
export const RoleIcon = () => (

    <svg
        width="24"
        height="24"
        clipRule="evenodd"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="m18.39 8.428c-.835.186-2.113.51-2.845.866-1.089.529-1.874 1.358-1.874 2.76 0 4.089 3.073 7.956 3.073 8.293 0 .131-.137.203-.227.113 0-.001-.001-.002-.001-.002-.673-.69-1.997-2.747-2.606-3.738v-.001c-.404-.653-.951-1.448-1.903-1.448h-.003c-.961 0-1.509.791-1.914 1.449-2.274 3.698-2.707 3.738-2.607 3.738-.094.095-.228.015-.228-.111 0-.285 3.073-4.285 3.073-8.293 0-1.336-.697-2.139-1.744-2.678-.833-.428-1.923-.669-2.956-.944-.009-.002-.017-.004-.026-.006-.138-.032-.138-.272.011-.299 1.098.25 3.412.923 6.387.923 2.94 0 5.295-.669 6.389-.923.145.029.152.265.001.301m-6.392-4.928c.858 0 1.552.7 1.552 1.562s-.694 1.563-1.552 1.563c-.856 0-1.55-.701-1.55-1.563s.694-1.562 1.55-1.562m6.367 3.125c-.427 0-2.112.584-4.474.821.699-.561 1.157-1.414 1.157-2.384 0-1.691-1.366-3.062-3.05-3.062-1.681 0-3.049 1.371-3.049 3.062 0 .97.458 1.824 1.158 2.385-2.361-.238-4.018-.822-4.472-.822-.897 0-1.635.738-1.635 1.653 0 .765.536 1.437 1.256 1.608 1.805.478 3.573.755 3.573 2.168 0 3.145-2.041 6.072-2.852 7.462-.002.003-.004.006-.005.009-.142.251-.216.536-.216.822 0 .916.737 1.653 1.635 1.653.437 0 .853-.174 1.165-.494.722-.741 2.157-2.937 2.811-3.999.12-.195.238-.383.371-.537.082-.096.151-.199.267-.199.113 0 .176.105.256.198.133.154.252.343.373.539.652 1.06 2.086 3.255 2.809 3.997.31.319.724.495 1.167.495.896 0 1.634-.737 1.634-1.653 0-.282-.07-.562-.226-.837-.002-.002-.003-.005-.005-.008-.83-1.426-2.843-4.3-2.843-7.448 0-1.516 2.067-1.772 3.567-2.167.728-.173 1.263-.846 1.263-1.609 0-.915-.739-1.653-1.635-1.653" />
    </svg>
);

export const OccupationIcon = () => (
    <svg
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 24 24"
    >
        <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm-7.363 18.764c1.828 1.989 4.451 3.236 7.363 3.236h.004l-4.618-7.998-2.749 4.762zm16.023-1.764h-9.233l2.749 4.762c2.767-.615 5.104-2.378 6.484-4.762zm-18.201-8c-.298.947-.459 1.955-.459 3 0 1.823.489 3.533 1.343 5.005l2.889-5.003-.001-.002.003-.002 1.731-2.998h-5.506zm18.203-1.997l-4.617 7.997h5.496c.298-.947.459-1.955.459-3 0-1.82-.487-3.526-1.338-4.997zm-6.927 1.997h-3.461l-1.733 3.002 1.731 2.998h3.464l1.731-2.999-1.732-3.001zm2.887 1.001l2.747-4.758c-1.828-1.992-4.452-3.242-7.366-3.243l4.619 8.001zm-6.792-7.764c-2.769.613-5.109 2.377-6.49 4.763h9.24l-2.75-4.763z" />
    </svg>
);

export const BluetoothIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z" />
        <path d="M11 2h2v10h-2z" />
    </svg>
);

export const CountryIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path d="M12 18.292v1.834c.644.129 1.177.303 1.496.528.273.192.274.498 0 .69-1.494 1.053-7.498 1.054-8.993 0-.272-.191-.271-.499 0-.69.319-.225.852-.399 1.497-.528v-1.833c-2.363.481-4 1.511-4 2.707 0 1.657 3.134 3 7 3s7-1.343 7-3c0-1.196-1.637-2.226-4-2.708zm7.45-14.94c-2.73 0-2.791-2.352-5.961-2.352-1.382 0-2.679.518-3.489 1.022v-2.022h-2v21h2v-9.122c.934-.553 2.172-1.048 3.5-1.048 2.993 0 3.413 2.237 6.081 2.237 1.058 0 1.914-.415 2.419-.736v-9.779c-.537.342-1.46.8-2.55.8zm.55 4.67c-1.801.486-4.082-1.087-5-1.693v2.671s-1.758-.803-5 .739v-2.901c1.188-1.046 3.292-1.734 5-.508v-2.808c.785.615 2.575 1.737 4.45 1.737.189 0 .372-.012.55-.033v2.796z" />
    </svg>
);

export const BellIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path d="M13.094 2.085l-1.013-.082a1.082 1.082 0 0 0-.161 0l-1.063.087C6.948 2.652 4 6.053 4 10v3.838l-.948 2.846A1 1 0 0 0 4 18h4.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5H20a1 1 0 0 0 .889-1.495L20 13.838V10c0-3.94-2.942-7.34-6.906-7.915zM12 19.5c-.841 0-1.5-.659-1.5-1.5h3c0 .841-.659 1.5-1.5 1.5zM5.388 16l.561-1.684A1.03 1.03 0 0 0 6 14v-4c0-2.959 2.211-5.509 5.08-5.923l.921-.074.868.068C15.794 4.497 18 7.046 18 10v4c0 .107.018.214.052.316l.56 1.684H5.388z" />
    </svg>
);

export const SearchIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
    </svg>
);