import './foo.scss';
import 'carbon-components/scss/components/modal/_modal.scss';

import { Modal } from 'carbon-components';

const modalElement = document.querySelector('#modal-nofooter');

const modalInstance = Modal.create(modalElement);

modalInstance.show();