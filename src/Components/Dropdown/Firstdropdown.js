import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import '../Dropdown/Firstdropdown.css';
import { Axios } from 'axios';

function Firstdropdown() {
  Axios.get('https://bid.cars/app/search/request?search-type=filters&type=Automobile&year-from=1900&year-to=2021&make=American%20Motors&model=All&auction-type=All&fbclid=IwAR0Dor5S2d4d9My7M4YTlpKEL0AnbSp2JwpqKghyA6UlsCi89pYZphrBYRo')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  return (
    <div >
      
        <div className='w-70'>
          <MDBDropdown className='m-4 '>
            <MDBDropdownToggle className='drop-1'>Automobile</MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link>Action</MDBDropdownItem>
              <MDBDropdownItem link>Another action</MDBDropdownItem>
              <MDBDropdownItem link>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
    </div>
  );
}

export default Firstdropdown;
