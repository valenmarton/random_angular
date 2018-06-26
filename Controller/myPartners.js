var myApp = angular.module("myModule", []);
//"database"
    myApp.controller("PartnerObj",function ($scope){
        partners = [

            {name: "KFC", date: new Date(), amount: -18.78,
                account: "39475828-29475865-12345678", category: "Food", type: "Charge"},

            {name: "ZOO", date: new Date(), amount: -20.25,
                account: "87538654-94758376-49573648", category: "Ticket", type: "Charge"},

            {name: "COOP", date: new Date(new Date().setDate(new Date().getDate()-1)), amount: -5.25,
                account: "12345678-48293576-75639274", category: "Food", type: "Charge"},

            {name: "ERSTE BANK", date: new Date(new Date().setDate(new Date().getDate()-1)), amount: -50.85,
                account: "94738764-47836578-38476538", category: "Contact Lenses", type: "Charge"},

            {name: "Premier Cat Supplies", date: new Date(new Date().setDate(new Date().getDate()-1)), amount: -28.20,
                account: "85643674-87546783-76574567", category: "Food", type: "Charge"},

            {name: "bet365", date: new Date(new Date().setDate(new Date().getDate()-2)), amount: -39.52,
                account: "58473678-87656785-87657687", category: "Bet", type: "Charge"},

            {name: "Baitrose", date: new Date(new Date().setDate(new Date().getDate()-2)), amount: -4.20,
                account: "97648376-76294623-24976354", category: "Food", type: "Charge"},

            {name: "TESCO", date: new Date(new Date().setDate(new Date().getDate()-3)), amount: -87.22,
                account: "43267578-75324523-2349876", category: "Food", type: "Charge"},

            {name: "Lidl", date: new Date(new Date().setDate(new Date().getDate()-3)), amount: -29.20,
                account: "85637283-73823574-23784646", category: "Food", type: "Charge"},

            {name: "H&M", date: new Date(new Date().setDate(new Date().getDate()-3)), amount: -128.20,
                account: "49248547-37594623-75843678", category: "Food", type: "Charge"},

            {name: "WizzAir", date: new Date(new Date().setDate(new Date().getDate()-4)), amount: -200.00,
                account: "85746375-75847364-98647653", category: "Food", type: "Charge"},

            {name: "Catherine Morris", date: new Date(new Date().setDate(new Date().getDate()-5)), amount: 37.88,
                account: "43276543-74638423-43533434", category: "Gift", type: "Transfer"},

            {name: "Fishers Fish&Chips", date: new Date(new Date().setDate(new Date().getDate()-6)), amount: -70.75,
                account: "94834712-84723471-12673845", category: "Food", type: "Charge"},

            {name: "Mc Donald's", date: new Date(new Date().setDate(new Date().getDate()-6)), amount: -52.80,
                account: "49875213-84217427-48247652", category: "Food", type: "Charge"},

            {name: "James Russell", date: new Date(new Date().setDate(new Date().getDate()-7)), amount: -30.20,
                account: "94832512-74823412-81247364", category: "Money", type: "Transfer"},

            {name: "Premier Dog Supplies", date: new Date(new Date().setDate(new Date().getDate()-8)), amount: -19.20,
                account: "49284512-94821842-49234276", category: "Food", type: "Charge"},

            {name: "Taylor Swift", date: new Date(new Date().setDate(new Date().getDate()-8)), amount: 102.50,
                account: "49257237-84623765-75965342", category: "Money", type: "Income"},

            {name: "Bob Hill", date: new Date(new Date().setDate(new Date().getDate()-8)), amount: 77.22,
                account: "74856274-97865483-97638628", category: "Money", type: "Income"},

            {name: "OTP BANK", date: new Date(new Date().setDate(new Date().getDate()-9)), amount: 24.30,
                account: "98637652-78549768-27348576", category: "Salary", type: "ATM"},

            {name: "Ashley Green", date: new Date(new Date().setDate(new Date().getDate()-10)) , amount: 20.14,
                account: "98347628-86463728-32394856", category: "Money", type: "Income"}

        ];

            // using $scope so I can use the functions inner HTML

        $scope.formatdate = function (date) {
            var stringToReturn = "";
            var todayDate = new Date();

            // todayDate milisec - partner.date milisec
            var daysDifference = Math.floor((todayDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

            switch(daysDifference) {
                case 0:
                    stringToReturn = "Today";
                    break;
                case 1:
                    stringToReturn = "Yesterday";
                    break;
                default:
                    var monthNames = [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
                    ];
                    stringToReturn = date.getDate() + " " + monthNames[date.getMonth()];
            }
            return stringToReturn;
        }


    // boolean - if true then amount will be green innerHTML

        $scope.amountcolor = function  (amount) {
            if(amount > 0) {
                return true;
            }
                return false;
        }
        $scope.showmore = function () {
            for(var i = $scope.loaded; i < $scope.loaded + 10; i++) {
              $scope.partners.push(partners [i]);
            }

                $scope.loaded = $scope.loaded + 10;
            $scope.sort();
        }
        $scope.loaded = 0;

        //sort dates
        $scope.sort = function () {
            $scope.partners.sort (function( a,b ){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.date) - new Date(a.date);
            });
        }



        $scope.partners = [];
        $scope.showmore();
        $scope.sort();


    });
