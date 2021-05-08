//
//  ribs.hpp
//  rax-of-ribs
//
//  Created by Edmond Wen on 5/8/21.
//

#ifndef ribs_hpp
#define ribs_hpp
#include <vector>
#include <stdio.h>
class Ribs {
    public:
        Ribs(){
    m_quality_s_p_ = 0;
    };
        int getQuality(){ return m_quality_s_p_; } // 0-3 for michelin
        void upScore(int howmuch_s_p_){m_score_s_p_ += howmuch_s_p_;}
        
    private:
        int m_quality_s_p_;
        int m_score_s_p_;
};

#endif /* ribs_hpp */
