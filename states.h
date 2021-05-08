#ifndef STATES_INCLUDED
#define STATES_INCLUDED

#include <string>
#include <vector>
using namespace std;

class States {
    public:
        States();
        States(string story, vector<States*> nextStates);
        ~States(States* head);
        void setStory(string story);
        string getStory();

        void setStates(vector<States*>);
        void addState(States* newState);

    private:
        string m_storyText_s_p_;
        vector<States*> m_nextStates_s_p_;
}



#endif //STATES_INCLUDED