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
        int getQuality(){ return m_quality_s_p_; } // 0-3 for michelin
        Ribs();
    private:
        int m_quality_s_p_;

};

#endif /* ribs_hpp */
