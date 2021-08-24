require('../../../public/js/core/core.module.js');
require('../../../public/js/core/constants.js');
require('../../../public/js/core/notify.service.js');

describe('notify', function () {
    beforeEach(angular.mock.module('app.core'));

    let notify;
    let PNotify;

    beforeEach(inject(function (_notify_, _PNotify_) {
        notify = _notify_;
        PNotify = _PNotify_;
    }));

    describe('success', function () {
        it('PNotify.success must be called with correct args', function () {
            const PNotifySuccessSpy = jest.spyOn(PNotify, 'success');

            notify.success('Hello World');

            expect(PNotifySuccessSpy).toHaveBeenCalledWith(expect.objectContaining({
                text: 'Hello World',
            }));
        });
    });

    describe('error', function () {
        it('PNotify.error must be called with correct args', function () {
            const PNotifyErrorSpy = jest.spyOn(PNotify, 'error');

            notify.error('Hello World');

            expect(PNotifyErrorSpy).toHaveBeenCalledWith(expect.objectContaining({
                text: 'Hello World',
            }));
        });
    });

    describe('notice', function () {
        it('PNotify.notice must be called with correct args', function () {
            const PNotifyNoticeSpy = jest.spyOn(PNotify, 'notice');

            notify.notice('Hello World');

            expect(PNotifyNoticeSpy).toHaveBeenCalledWith(expect.objectContaining({
                text: 'Hello World',
            }));
        });
    });
});
