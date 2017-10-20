function BookingViewModel()
{
    var self = this;
    
    var maximumVias = 3;
    
    self.booking = new Booking();
       
    self.addVia = function() {
        if(self.booking.vias().length < maximumVias)
        { self.booking.vias.push(new Via()); }
    }
    
    self.removeVia = function(via) {
        self.booking.vias.remove(via);
    }
}