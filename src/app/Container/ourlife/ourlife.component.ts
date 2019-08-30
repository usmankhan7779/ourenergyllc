import { Component } from '@angular/core';

@Component({
  selector: 'app-ourlife',
  templateUrl: './ourlife.component.html',
  styleUrls: ['./ourlife.component.scss']
})
export class OurlifeComponent {
  loadmorebtn = "Load More";
  status = false;
  status2 = false;
  status3 = false;
  status4 = false;
  status5 = false;

  loadMore() {
    if (this.loadmorebtn == "Load More") {
      this.status = true;
      this.status2 = true;
      this.status3 = true;
      this.status4 = true;
      this.status5 = true;
      this.loadmorebtn = 'Show Less'
    }
    else if (this.loadmorebtn == "Show Less") {
      this.status = false;
      this.status2 = false;
      this.status3 = false;
      this.status4 = false;
      this.status5 = false;
      this.loadmorebtn = "Load More"
    }
  }
  loadMoretab() {
    if (this.loadmorebtn == "Show Less") {
      this.status = false;
      this.status2 = false;
      this.status3 = false;
      this.status4 = false;
      this.status5 = false;
      this.loadmorebtn = "Load More"
    }
  }
  ngOnInit() { window.scrollTo(0, 0); }
}

@Component({
  selector: 'treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./ourlife.component.scss']
})
export class TreatmentRaffleComponent { }
@Component({
  selector: 'texas',
  templateUrl: './texas.html',
  styleUrls: ['./ourlife.component.scss']
})
export class TexasNewYearComponent { }
@Component({
  selector: 'thanks',
  templateUrl: './thanks.html',
  styleUrls: ['./ourlife.component.scss']
})
export class ThanksGivingComponent { }
@Component({
  selector: 'water-profing',
  templateUrl: './waterproofing.html',
  styleUrls: ['./ourlife.component.scss']
})
export class WaterProfingComponent { }
@Component({
  selector: 'texas-tips',
  templateUrl: './texas-tips-to-stay.html',
  styleUrls: ['./ourlife.component.scss']
})
export class TexasTipsComponent { }
@Component({
  selector: 'energy-saving-recipe',
  templateUrl: './energy-saving-recipe.html',
  styleUrls: ['./ourlife.component.scss']
})
export class EnergySavingRecipeComponent { }
@Component({
  selector: 'best-texas',
  templateUrl: './best-texas-cavier-recipe.html',
  styleUrls: ['./ourlife.component.scss']
})
export class CavierRecipeComponent { }
@Component({
  selector: 'ode-texas-father',
  templateUrl: './ode-texas-father.html',
  styleUrls: ['./ourlife.component.scss']
})
export class OdeTexasFatherComponent { }
@Component({
  selector: 'texas-thunderstorm',
  templateUrl: './texas-thunderstorm.html',
  styleUrls: ['./ourlife.component.scss']
})
export class TexasThunderstormComponent { }
@Component({
  selector: 'enjoy-a-year',
  templateUrl: './enjoy-a-year.html',
  styleUrls: ['./ourlife.component.scss']
})
export class EnjoyYearComponent { }

@Component({
  selector: 'find-low-energy-rates',
  templateUrl: './find-low-energy-rates.html',
  styleUrls: ['./ourlife.component.scss']
})
export class LowEnergyComponent { }
@Component({
  selector: 'putting-texas-energy',
  templateUrl: './putting-texas-energy.html',
  styleUrls: ['./ourlife.component.scss']
})
export class TexasEnergyComponent { }
@Component({
  selector: 'our-energy-launches',
  templateUrl: './our-energy-launches.html',
  styleUrls: ['./ourlife.component.scss']
})
export class EnergyLaunchesComponent { }
@Component({
  selector: 'nfl-sweepstakes',
  templateUrl: './nfl-sweepstakes.html',
  styleUrls: ['./ourlife.component.scss']
})
export class NFLSweepstakesComponent { }

@Component({
  selector: 'our-energy-launches',
  templateUrl: './green-electricity.html',
  styleUrls: ['./ourlife.component.scss']
})
export class GreenEnergyComponent { }
@Component({
  selector: 'texas-no-bake',
  templateUrl: './texas-no-bake.html',
  styleUrls: ['./ourlife.component.scss']
})
export class TexasNoBakeComponent { }
@Component({
  selector: 'top-five-creative',
  templateUrl: './top-five-led.html',
  styleUrls: ['./ourlife.component.scss']
})
export class TopFiveLEDComponent { }
@Component({
  selector: 'summer-energy',
  templateUrl: './summer-energy-saving-tips.html',
  styleUrls: ['./ourlife.component.scss']
})
export class SummerEnergyComponent { }
@Component({
  selector: 'first-texas',
  templateUrl: './first-texas-electricity.html',
  styleUrls: ['./ourlife.component.scss']
})
export class FirstTexasComponent { }
@Component({
  selector: 'seasonal-selfie',
  templateUrl: './seasonal-selfie.html',
  styleUrls: ['./ourlife.component.scss']
})
export class SeaonalSelfieComponent { }
@Component({
  selector: 'no-limit',
  templateUrl: './no-limit-refer-a-friend.html',
  styleUrls: ['./ourlife.component.scss']
})
export class NoLimitReferComponent { }
@Component({
  selector: 'more-than-energy',
  templateUrl: './more-than-energy.html',
  styleUrls: ['./ourlife.component.scss']
})
export class MoreThanCompanyComponent { }

@Component({
  selector: 'moving-to-texas',
  templateUrl: './moving-to-texas.html',
  styleUrls: ['./ourlife.component.scss']
})
export class MovingToTexasComponent { }
@Component({
  selector: 'more-than-just-energy',
  templateUrl: './more-than-just-energy.html',
  styleUrls: ['./ourlife.component.scss']
})
export class MoreThanEnergyComponent { }
@Component({
  selector: 'cheap-texas-energy',
  templateUrl: './cheap-texas-energy.html',
  styleUrls: ['./ourlife.component.scss']
})
export class CheapTexasComponent { }

@Component({
  selector: 'nfl-tickets-raffle',
  templateUrl: './nfl-tickets-raffle.html',
  styleUrls: ['./ourlife.component.scss']
})
export class NFLTicketsComponent { }

@Component({
  selector: 'march-madness-part',
  templateUrl: './march-madness-part.html',
  styleUrls: ['./ourlife.component.scss']
})
export class MarchMadnessComponent { }
@Component({
  selector: 'february-share-the-love-raffle',
  templateUrl: './february-share-the-love-raffle.html',
  styleUrls: ['./ourlife.component.scss']
})
export class FebruaryShareComponent { }
@Component({
  selector: 'december-nfl-ticket-raffle-winners',
  templateUrl: './december-nfl-ticket-raffle-winners.html',
  styleUrls: ['./ourlife.component.scss']
})
export class DecemberNFLComponent { }

@Component({
  selector: 'first-double-trouble-nfl-raffle-winners',
  templateUrl: './first-double-trouble-nfl-raffle-winners.html',
  styleUrls: ['./ourlife.component.scss']
})
export class FirstDoubleTroubleComponent { }
@Component({
  selector: 'first-nfl-sweepstakes-winners',
  templateUrl: './first-nfl-sweepstakes-winners.html',
  styleUrls: ['./ourlife.component.scss']
})
export class FirstNFLSweepKeepersComponent { }
@Component({
  selector: 'about-green',
  templateUrl: './about-green-energy.html',
  styleUrls: ['./ourlife.component.scss']
})
export class AboutGreenComponent { }
@Component({
  selector: 'green-energy-news',
  templateUrl: './green-energy-news.html',
  styleUrls: ['./ourlife.component.scss']
})
export class GreenEnergyNewsComponent { }

@Component({
  selector: 'our-energy-buzz',
  templateUrl: './our-energy-buzz.html',
  styleUrls: ['./ourlife.component.scss']
})
export class OurEnergyBuzzComponent { }

@Component({
  selector: 'special-contest',
  templateUrl: './special-contest.html',
  styleUrls: ['./ourlife.component.scss']
})
export class SpecialContestComponent { }
@Component({
  selector: 'residential-promotions',
  templateUrl: './residential-promotions.html',
  styleUrls: ['./ourlife.component.scss']
})
export class ResidentialPromotionsComponent { }
@Component({
  selector: 'energy-tips',
  templateUrl: './energy-tips.html',
  styleUrls: ['./ourlife.component.scss']
})
export class EnergyTipsComponent { }
@Component({
  selector: 'texas-news',
  templateUrl: './texas-news.html',
  styleUrls: ['./ourlife.component.scss']
})
export class TexasNewsComponent { }
@Component({
  selector: 'business-promotions',
  templateUrl: './business-promotions.html',
  styleUrls: ['./ourlife.component.scss']
})
export class BusinessPromotionsComponent { }
@Component({
  selector: 'our-communtiy',
  templateUrl: './our-community.html',
  styleUrls: ['./ourlife.component.scss']
})
export class OurCommuntiyComponent { }
@Component({
  selector: 'energy-news',
  templateUrl: './energy-news.html',
  styleUrls: ['./ourlife.component.scss']
})
export class EnergyNewsComponent { }
@Component({
  selector: 'five-money',
  templateUrl: './five-money-saving-tips.html',
  styleUrls: ['./ourlife.component.scss']
})
export class FiveMoneyComponent { }
@Component({
  selector: 'January-2017',
  templateUrl: './January 2017.html',
  styleUrls: ['./ourlife.component.scss']
})
export class January2017 { }
@Component({
  selector: 'May-2017',
  templateUrl: './May 2017.html',
  styleUrls: ['./ourlife.component.scss']
})
export class May2017 { }
@Component({
  selector: 'January-2016',
  templateUrl: './January 2016.html',
  styleUrls: ['./ourlife.component.scss']
})
export class January2016 { }
@Component({
  selector: 'February-2016',
  templateUrl: './February 2016.html',
  styleUrls: ['./ourlife.component.scss']
})
export class February2016 { }
@Component({
  selector: 'March-2016',
  templateUrl: './March 2016.html',
  styleUrls: ['./ourlife.component.scss']
})
export class March2016 { }
@Component({
  selector: 'April-2016',
  templateUrl: './April 2016.html',
  styleUrls: ['./ourlife.component.scss']
})
export class April2016 { }
@Component({
  selector: 'June-2016',
  templateUrl: './june 2016.html',
  styleUrls: ['./ourlife.component.scss']
})
export class June2016 { }
@Component({
  selector: 'July-2016',
  templateUrl: './July 2016.html',
  styleUrls: ['./ourlife.component.scss']
})
export class July2016 { }
@Component({
  selector: 'August-2016',
  templateUrl: './August 2016.html',
  styleUrls: ['./ourlife.component.scss']
})
export class August2016 { }
@Component({
  selector: 'November-2016',
  templateUrl: './November 2016.html',
  styleUrls: ['./ourlife.component.scss']
})
export class November2016 { }
@Component({
  selector: 'October-2015',
  templateUrl: './October 2015.html',
  styleUrls: ['./ourlife.component.scss']
})
export class October2015 { }
@Component({
  selector: 'December-2015',
  templateUrl: './December 2015.html',
  styleUrls: ['./ourlife.component.scss']
})
export class December2015 { }
@Component({
  selector: 'November-2015',
  templateUrl: './November 2015.html',
  styleUrls: ['./ourlife.component.scss']
})
export class November2015 { }
@Component({
  selector: 'September-2015',
  templateUrl: './September 2015.html',
  styleUrls: ['./ourlife.component.scss']
})
export class September2015 { }
@Component({
  selector: 'August-2015',
  templateUrl: './August 2015.html',
  styleUrls: ['./ourlife.component.scss']
})
export class August2015 { }
@Component({
  selector: 'July-2015',
  templateUrl: './July 2015.html',
  styleUrls: ['./ourlife.component.scss']
})
export class July2015 { }
@Component({
  selector: 'post-2017',
  templateUrl: './2017.html',
  styleUrls: ['./ourlife.component.scss']
})
export class Post17 { }