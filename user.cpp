//
//  user.cpp
//  rax-of-ribs
//  
//  Created by Edmond Wen on 5/8/21.
//

#include <iostream>
#include <string>
#include "user.h";
#include "ribs.h";
#include <random>
#include <utility>
using namespace std;

string generateGordonInsult(){
    int num_s_p_ = randInt(0, 10); //i think the 10 is exclusive? 
    string gordonInsults_s_p_[10] = {
        "               YOU DONKEY!                |",
        "        YOU DON'T MICROWAVE A SALAD       |",
        "    you guys cook like old people ****    |", 
        "    FUCK OFF FUCK OFF FUCK OFF FUCK OFF   |",
        "           GET OUUUUUUUUUTTTTT            |",
        "  fuck off you fat useless sack of shite  |",
        "      what are you? an idiot sandwich     |",
        " My gran could do better! And she's dead! |",
        "        chimi chuck it in the bin         |",
        "     you surprise me, how shit you are    |"
    };
    string insult_s_p_ = gordonInsults_s_p_[num_s_p_];
    const char* ramsayGUI = 
    
R"(  ----------------------------------------  
/                                          \
|                                          |
|)" + insult_s_p_ +  //42 character long message
R"(
|                                          |
|                                          |
\                                          /
  ----------------------------------------
                    \                                                                                                 
                     \                ,,/*%&                                                     
                      \             /,....,..,.*/***#&                                             
                                  #,*,.....*/*/,,.,,..,,./@                                        
                                  %...**/*((((#*(#//*/,,*/**,%                                     
                                     */(((#(/%###/*/(#(#*,,/(/((                                   
                                &.../(***/(###(*(//,/*((*((//((/(                                  
                                **,.%/...*///////*(**/*(*#/((((/%/                                 
                                 /,*/..,****///////*/*,*/((#(/((##(                                
                                 **(.,,*******///////*,,,,(%%#%(##((                               
                                 @%#,,********///////*,,,**##%%%####                               
                                  %/,*,***/**////***,,...,/,,*#&&%(#                               
                                  #(..*((///((###(#(((/*,,,/((((#*(/                               
                                    ./#&(**/(#(((((((/,..*//*(/(/*                               
                                 %  *(*/(*.************,,..,,.(#((//                               
                                    .,..*,**.**/#(//*,*/**,,,*(,/,/*                               
                                    ,**/#/(((%##(##(//****,*,///,..  ,%/                           
                                  (  */(#/*///((//(#(/*/**,,,,...  ,.          ,#                  
                                     /*(#//((((((%#(((//**,*,,,.    ....              *            
                                      ,/((%&&&%%%%%#(////**,,,,.     ......                        
                                     @#*/(/##(((((//(///*,**,,,      .. ,,...                  .   
                                  (     */////////////*/,,**/*,         ..,....                   #
                                 ,       ***///*///**//**///*/      .    .........                 
                              #         . ,,*/////////**////(      .     ............    .         
                             *         ..   *((((((###((//((,     ,...    ......,.........         
                           .         ...       /(/(((((((/((...    ..      ......,...,,... .       
                                 .......         ,/(//((/,,...    ..    .   .....,,...,........    
                                ........      ...........   .      .    ..    ....,,..,,,..,.,,.   
                              .......... ..       .. ..          ..........    ........,,..,,,,,,. 
                          . ............  ....              .................   .......,,..,,,,,,,.
                          .. .........    ..  ...            ..................    .....,...,,,,,..
                            ..,,,,....    .                   .. .........,,,,,..    ....,,,,,,,,,.
                            ..,.,,.... ...,,,.                 .........,....,,,,..     ...*,,,,,,,
)";
}

User::User(std::string name_s_p_, int health_s_p_) {
    m_name_s_p_ = name_s_p_;
    //idiot sandwich --> associate chef --> executive chef --> masterchef
    m_chef_rating_s_p_ = "idiot sandwich";
    m_ribs_s_p_ = new Ribs();
    m_health_s_p_ = health_s_p_;
}

int randInt(int min_s_p_, int max_s_p_)
{
    if (max_s_p_ < min_s_p_)
        std::swap(max_s_p_, min_s_p_);
    static std::random_device rd;
    static std::default_random_engine generator(rd());
    std::uniform_int_distribution<> distro(min_s_p_, max_s_p_);
    return distro(generator);
}


void User::getSpanked(int force_s_p_){
    cout << generateGordonInsult() << endl;
    m_health_s_p_ -= force_s_p_;
    cout << "*SPANK* Ouch! (×_×#)" << endl;
}

string User::getName(){
    return m_name_s_p_;
}

int User::getHealth() {
    return m_health_s_p_;
}

void User::updateRating(string newRating) {
    m_chef_rating_s_p_ = newRating;
}

bool User::isAlive(){
    if (m_health_s_p_ > 0){
        return true;
    }
    return false;
}
string User::getRating() {
    return m_chef_rating_s_p_;
}

