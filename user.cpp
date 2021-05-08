//
//  user.cpp
//  rax-of-ribs
//  
//  Created by Edmond Wen on 5/8/21.
//

#include <iostream>
#include <string>
#include "user.h"
using namespace std;

User::getSpanked(int force_s_p_){
    generateGordonInsult("TEXT FOR MESSAGE");
    m_health_s_p_ -= force_s_p_;
    cout << "*SPANK* Ouch!" << endl;
}

User::getName(){
    return m_health_s_p_;
}