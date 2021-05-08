//
//  user.hpp
//  rax-of-ribs
//
//  Created by Edmond Wen on 5/8/21.
//

#ifndef user_h
#define user_h

#include <stdio.h>
#include <string>
class Ribs;

class User {
    public:
        User(std::string name);
        void getSpanked(int force_s_p_); //kekw
        std::string getName();
        int getHealth();
        void updateRating(std::string newRating);
        string getRating();
    private:
        int m_health_s_p_;
        std::string m_chef_rating_s_p_;
        std::string m_name_s_p_;
        Ribs *m_ribs_s_p_;
};

#endif /* user_h */
