import DbnSfpService from '@service/DbnSfpService';
import DbnSfp from '../model/dbnSfp/DbnSfp';
import axios from 'axios';

class DefaultDbnSfpService implements DbnSfpService {
    async getSample(): Promise<DbnSfp> {
        const response = await axios.get(
            'https://api.dptablo.com/v1/dbnSfp/sample',
        );
        return response.data;
    }
}
export default DefaultDbnSfpService;
