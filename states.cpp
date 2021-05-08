#include "states.h"

#include <string>
#include <vector>

States::States() {
    setStory("");
    m_nextStates_s_p_ = new vector<States*>;
}

States::States(string story, vector<States*> nextStates) {
    setStory(story);
    setStates(nextStates);
}

States::~States(States* head) {
    //Do later
}

void States::setStory(string story) {
    m_storyText_s_p_ = story;
    return;
}

string States::getStory() {
    return m_storyText_s_p_;
}

void setStates(vector<States*> nextStates) {
    m_nextStates_s_p_ = nextStates;
}

void addStates(States* newState) {
    m_nextStates_s_p_.push_back(newState);
}
