function Booking()
{
    var self = this;
    
    self.pickup = ko.observable("");
    self.destination = ko.observable("");
    self.vias = ko.observableArray([]);
}