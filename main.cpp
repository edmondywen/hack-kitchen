//
//  main.cpp
//  rax-of-ribs
//
//  Created by Edmond Wen on 5/8/21.
//

#include <iostream>
#include <unistd.h>
#include <string>
#include "ribs.cpp"
#include "user.cpp"
using namespace std;

void clearScreen();

int main(int argc, const char * argv[]) {


    // insert code here...
    cout << "Welcome to Gordon Ramsey's kitchen! You are a noob chef who will begin training under Gordon in the hopes of eventually reaching the master chef level." << endl;
    cout << "You must remember all of the ingredients that Gordon Ramsey wants for each meal, or you will get massively spanked!!" << endl << endl;
    cout << "I have very low hopes for you...wait, what's your name again?" << endl << endl;
    string name_s_p_;;
    int startHealth_s_p_ = 10;
    getline(cin, name_s_p_);
    cout << "Okay, " << name_s_p_ << ". Let's get cooking." << endl;
    User user_s_p_(name_s_p_, startHealth_s_p_);

    int phase_s_p_ = 1;
    bool alive_s_p_ = true;
    string answer_s_p_;
    while (user_s_p_.isAlive()) {
        switch(phase_s_p_) {
            case 1:
                cout << "Phase 1: " << user_s_p_.getRating() << endl << endl;
                cout << "Okay this is SUPER simple so I hope you get this right..." << endl;
                cout << "eggs snails rigatoni" << endl;
                sleep(5000);
                clearScreen();
                cout << "What were the ingredients? (try including 'beans' for an easter egg!)" << endl;
                getline(cin, answer_s_p_);
                if (answer_s_p_.find("beans") >= 0) {
                    cout << "BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS BEANS" << endl;
                }
                if (answer_s_p_.find("eggs snails rigatoni") >= 0) {
                    cout << "Not bad. But I'm still skeptical about your skills." << endl;
                    user_s_p_.updateRating("associate chef");
                    cout << "Your rank is now: " << user_s_p_.getRating() << endl;
                    
                }
                else {
                    user_s_p_.getSpanked(10); //they basically only have one life for now
                    if (!user_s_p_.isAlive())
                        cout << "You got sent home...better luck next time" << endl;
                    else 
                        cout << "looks like you're still here. don't you dare piss me off again" << endl;
                }
                
                phase_s_p_ = 2;
                //user object has an isAlive function - use that and health
                break;
            case 2:
                cout << "Phase 2: " <<  user_s_p_.getRating() << endl << endl;
                cout << "Okay, now we'll get started on your main dish...sticky pork ribs!" << endl;
                cout << "I know you're a bit dense, so I'll split up the steps to make it easier for you" << endl;


            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            default:
        }
    }
}
//spicy
//hola

#ifdef _MSC_VER  //  Microsoft Visual C++

#include <windows.h>

void clearScreen()
{
    HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
    CONSOLE_SCREEN_BUFFER_INFO csbi;
    GetConsoleScreenBufferInfo(hConsole, &csbi);
    DWORD dwConSize = csbi.dwSize.X * csbi.dwSize.Y;
    COORD upperLeft = { 0, 0 };
    DWORD dwCharsWritten;
    FillConsoleOutputCharacter(hConsole, TCHAR(' '), dwConSize, upperLeft,
                                                        &dwCharsWritten);
    SetConsoleCursorPosition(hConsole, upperLeft);
}

#else  // not Microsoft Visual C++, so assume UNIX interface

#include <iostream>
#include <cstring>
#include <cstdlib>

void clearScreen()  // will just write a newline in an Xcode output window
{
    static const char* term = getenv("TERM");
    if (term == nullptr  ||  strcmp(term, "dumb") == 0)
        cout << endl;
    else
    {
        static const char* ESC_SEQ = "\x1B[";  // ANSI Terminal esc seq:  ESC [
        cout << ESC_SEQ << "2J" << ESC_SEQ << "H" << flush;
    }
}

#endif
