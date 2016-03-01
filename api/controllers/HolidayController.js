/**
 * HolidayController
 *
 * @description :: Server-side logic for managing holidays
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 * @TODO: Support different date formats
 * @TODO: Date parsing
 */

module.exports = {
  create: function(req, res) {
    var date = req.param('date');
    var dateParts = date.split('-');
    Holiday.create({
      date: new Date(dateParts[0], (parseInt(dateParts[1]) - 1), dateParts[2], 0, 0, 0, 0)
    }).exec(function(err, holiday){
      res.json({
        success: true,
        holiday: holiday
      });
    });

  },
  check: function(req, res) {
    var date = req.param('date');
    if (!date) {
      res.status(400);
      res.json({
        success: false,
        message: 'You need to tell me the date!'
      });
    }

    if (date) {
      var dateParts = date.split('-');

      var holiday   = Holiday.findByDate(new Date(dateParts[0], (parseInt(dateParts[1]) - 1), dateParts[2], 0, 0, 0, 0)).exec(
        function(err, holiday) {
          var isHoliday = true;

          if (!holiday.length) {
            isHoliday = false;
          }

          return res.json({
            success: true,
            isHoliday: isHoliday
          });
        }
      );
    }
  }
};

