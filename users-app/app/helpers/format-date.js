import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function formatDate(date/*, hash*/) {
  return moment(new Date(date)).fromNow();
});
