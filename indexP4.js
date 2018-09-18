(function() {
  $('.js-vertical-tab-content').hide();

  $('.js-vertical-tab-content:first').show();

  /* if in tab mode */
  $('.js-vertical-tab').click(function(event) {
    var activeTab;
    event.preventDefault();
    $('.js-vertical-tab-content').hide();
    activeTab = $(this).attr('rel');
    $('#' + activeTab).show();
    $('.js-vertical-tab').removeClass('is-active');
    $(this).addClass('is-active');
    $('.js-vertical-tab-accordion-heading').removeClass('is-active');
    $('.js-vertical-tab-accordion-heading[rel^=\'' + activeTab + '\']').addClass('is-active');
  });

  /* if in accordion mode */
  $('.js-vertical-tab-accordion-heading').click(function(event) {
    var accordion_activeTab;
    event.preventDefault();
    $('.js-vertical-tab-content').hide();
    accordion_activeTab = $(this).attr('rel');
    $('#' + accordion_activeTab).show();
    $('.js-vertical-tab-accordion-heading').removeClass('is-active');
    $(this).addClass('is-active');
    $('.js-vertical-tab').removeClass('is-active');
    $('.js-vertical-tab[rel^=\'' + accordion_activeTab + '\']').addClass('is-active');
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsMEJBQUYsQ0FBNkIsQ0FBQyxJQUE5QixDQUFBOztFQUNBLENBQUEsQ0FBRSxnQ0FBRixDQUFtQyxDQUFDLElBQXBDLENBQUEsRUFEQTs7O0VBS0EsQ0FBQSxDQUFFLGtCQUFGLENBQXFCLENBQUMsS0FBdEIsQ0FBNEIsUUFBQSxDQUFDLEtBQUQsQ0FBQTtBQUMxQixRQUFBO0lBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBQTtJQUNBLENBQUEsQ0FBRSwwQkFBRixDQUE2QixDQUFDLElBQTlCLENBQUE7SUFDQSxTQUFBLEdBQVksQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxLQUFiO0lBQ1osQ0FBQSxDQUFFLEdBQUEsR0FBTSxTQUFSLENBQWtCLENBQUMsSUFBbkIsQ0FBQTtJQUNBLENBQUEsQ0FBRSxrQkFBRixDQUFxQixDQUFDLFdBQXRCLENBQWtDLFdBQWxDO0lBQ0EsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLFFBQVIsQ0FBaUIsV0FBakI7SUFDQSxDQUFBLENBQUUsb0NBQUYsQ0FBdUMsQ0FBQyxXQUF4QyxDQUFvRCxXQUFwRDtJQUNBLENBQUEsQ0FBRSw0Q0FBQSxHQUErQyxTQUEvQyxHQUEyRCxLQUE3RCxDQUFtRSxDQUFDLFFBQXBFLENBQTZFLFdBQTdFO0VBUjBCLENBQTVCLEVBTEE7OztFQWtCQSxDQUFBLENBQUUsb0NBQUYsQ0FBdUMsQ0FBQyxLQUF4QyxDQUE4QyxRQUFBLENBQUMsS0FBRCxDQUFBO0FBQzVDLFFBQUE7SUFBQSxLQUFLLENBQUMsY0FBTixDQUFBO0lBQ0EsQ0FBQSxDQUFFLDBCQUFGLENBQTZCLENBQUMsSUFBOUIsQ0FBQTtJQUNBLG1CQUFBLEdBQXNCLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsS0FBYjtJQUN0QixDQUFBLENBQUUsR0FBQSxHQUFNLG1CQUFSLENBQTRCLENBQUMsSUFBN0IsQ0FBQTtJQUNBLENBQUEsQ0FBRSxvQ0FBRixDQUF1QyxDQUFDLFdBQXhDLENBQW9ELFdBQXBEO0lBQ0EsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLFFBQVIsQ0FBaUIsV0FBakI7SUFDQSxDQUFBLENBQUUsa0JBQUYsQ0FBcUIsQ0FBQyxXQUF0QixDQUFrQyxXQUFsQztJQUNBLENBQUEsQ0FBRSwwQkFBQSxHQUE2QixtQkFBN0IsR0FBbUQsS0FBckQsQ0FBMkQsQ0FBQyxRQUE1RCxDQUFxRSxXQUFyRTtFQVI0QyxDQUE5QztBQWxCQSIsInNvdXJjZXNDb250ZW50IjpbIiQoJy5qcy12ZXJ0aWNhbC10YWItY29udGVudCcpLmhpZGUoKVxuJCgnLmpzLXZlcnRpY2FsLXRhYi1jb250ZW50OmZpcnN0Jykuc2hvdygpXG5cbiMjIyBpZiBpbiB0YWIgbW9kZSAjIyNcblxuJCgnLmpzLXZlcnRpY2FsLXRhYicpLmNsaWNrIChldmVudCkgLT5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAkKCcuanMtdmVydGljYWwtdGFiLWNvbnRlbnQnKS5oaWRlKClcbiAgYWN0aXZlVGFiID0gJCh0aGlzKS5hdHRyKCdyZWwnKVxuICAkKCcjJyArIGFjdGl2ZVRhYikuc2hvdygpXG4gICQoJy5qcy12ZXJ0aWNhbC10YWInKS5yZW1vdmVDbGFzcyAnaXMtYWN0aXZlJ1xuICAkKHRoaXMpLmFkZENsYXNzICdpcy1hY3RpdmUnXG4gICQoJy5qcy12ZXJ0aWNhbC10YWItYWNjb3JkaW9uLWhlYWRpbmcnKS5yZW1vdmVDbGFzcyAnaXMtYWN0aXZlJ1xuICAkKCcuanMtdmVydGljYWwtdGFiLWFjY29yZGlvbi1oZWFkaW5nW3JlbF49XFwnJyArIGFjdGl2ZVRhYiArICdcXCddJykuYWRkQ2xhc3MgJ2lzLWFjdGl2ZSdcbiAgcmV0dXJuXG5cbiMjIyBpZiBpbiBhY2NvcmRpb24gbW9kZSAjIyNcblxuJCgnLmpzLXZlcnRpY2FsLXRhYi1hY2NvcmRpb24taGVhZGluZycpLmNsaWNrIChldmVudCkgLT5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAkKCcuanMtdmVydGljYWwtdGFiLWNvbnRlbnQnKS5oaWRlKClcbiAgYWNjb3JkaW9uX2FjdGl2ZVRhYiA9ICQodGhpcykuYXR0cigncmVsJylcbiAgJCgnIycgKyBhY2NvcmRpb25fYWN0aXZlVGFiKS5zaG93KClcbiAgJCgnLmpzLXZlcnRpY2FsLXRhYi1hY2NvcmRpb24taGVhZGluZycpLnJlbW92ZUNsYXNzICdpcy1hY3RpdmUnXG4gICQodGhpcykuYWRkQ2xhc3MgJ2lzLWFjdGl2ZSdcbiAgJCgnLmpzLXZlcnRpY2FsLXRhYicpLnJlbW92ZUNsYXNzICdpcy1hY3RpdmUnXG4gICQoJy5qcy12ZXJ0aWNhbC10YWJbcmVsXj1cXCcnICsgYWNjb3JkaW9uX2FjdGl2ZVRhYiArICdcXCddJykuYWRkQ2xhc3MgJ2lzLWFjdGl2ZSdcbiAgcmV0dXJuXG4iXX0=
//# sourceURL=coffeescript