#Fiona Waweru
#NEA-VERSION 10

#User-friendly introduction to the computer program


print("Welcome to your computer program for the Dancers UK competition!") 
print("This program will calculate the total scores for each couple at the end of each round.")
print("Couples will be eliminated until the winning couple is established.")



def couple_A():
    global grand_total_couple_A_R1

    judge_1= int(input("Please enter JUDGE 1's score for COUPLE A:"))
    judge_2= int(input("Please enter JUDGE 2's score for COUPLE A:"))
    judge_3= int(input("Please enter JUDGE 3's score for COUPLE A:"))
    judge_4= int(input("Please enter JUDGE 4's score for COUPLE A:"))
    judge_5= int(input("Please enter JUDGE 5's score for COUPLE A:"))
    print("\n")

    total_couple_A_R1 = [judge_1,judge_2,judge_3,judge_4,judge_5]#array of total scores for COUPLE A in round 1 
    high = max(total_couple_A_R1)
    low = min(total_couple_A_R1)
    
    print("The highest score entered was: ", high, ".")
    print("The lowest score entered was: ", low, ".")
    print("\n")

    total = sum(total_couple_A_R1)
    
    print("At the end of ROUND 1,the total score for COUPLE A is:", total -(high + low))
    print("\n")

    global sum_couple_A_R1


    sum_couple_A_R1 = (total -(high + low))

    grand_total = (total -(high + low))
    grand_total= str(grand_total)
    file = open("grand_total.txt","w")
    file.write("ROUND 1 SCORES : COUPLE A: %s " % grand_total + "\n")

    return

   

    

def couple_B():
    judge_1= int(input("Please enter JUDGE 1's score for COUPLE B:"))
    judge_2= int(input("Please enter JUDGE 2's score for COUPLE B:"))
    judge_3= int(input("Please enter JUDGE 3's score for COUPLE B:"))
    judge_4= int(input("Please enter JUDGE 4's score for COUPLE B:"))
    judge_5= int(input("Please enter JUDGE 5's score for COUPLE B:"))
    print("\n")
    
    total_couple_B_R1 = [judge_1,judge_2,judge_3,judge_4,judge_5]#array of total scores for COUPLE B in round 1 
    high = max(total_couple_B_R1)
    low = min(total_couple_B_R1)
    
    print("The highest score entered was: ", high, ".")
    print("The lowest score entered was: ", low, ".")
    print("\n")

    sum(total_couple_B_R1)
    print("At the end of ROUND 1,the total score for COUPLE B is:", sum(total_couple_B_R1)-(high + low))
    print("\n")

    grand_total=(sum(total_couple_B_R1)-(high + low))
    grand_total= str(grand_total)
    with open("grand_total.txt","a") as file:
        file.write("ROUND 1 SCORES : COUPLE B: %s " % grand_total + "\n")
   

    



def couple_C():
    judge_1= int(input("Please enter JUDGE 1's score for COUPLE C:"))
    judge_2= int(input("Please enter JUDGE 2's score for COUPLE C:"))
    judge_3= int(input("Please enter JUDGE 3's score for COUPLE C:"))
    judge_4= int(input("Please enter JUDGE 4's score for COUPLE C:"))
    judge_5= int(input("Please enter JUDGE 5's score for COUPLE C:"))
    print("\n")
    
    total_couple_C_R1 = [judge_1,judge_2,judge_3,judge_4,judge_5]#array of total scores for COUPLE C in round 1
    high = max(total_couple_C_R1)
    low = min(total_couple_C_R1)
    
    print("The highest score entered was: ", high, ".")
    print("The lowest score entered was: ", low, ".")
    print("\n")

    sum(total_couple_C_R1)
    print("At the end of ROUND 1,the total score for COUPLE C is:", sum(total_couple_C_R1)-(high + low))
    print("\n")

    grand_total=(sum(total_couple_C_R1)-(high + low))
    grand_total= str(grand_total)
    with open("grand_total.txt","a") as file:
        file.write("ROUND 1 SCORES : COUPLE C: %s " % grand_total + "\n")
   





def couple_D():
    judge_1= int(input("Please enter JUDGE 1's score for COUPLE D:"))
    judge_2= int(input("Please enter JUDGE 2's score for COUPLE D:"))
    judge_3= int(input("Please enter JUDGE 3's score for COUPLE D:"))
    judge_4= int(input("Please enter JUDGE 4's score for COUPLE D:"))
    judge_5= int(input("Please enter JUDGE 5's score for COUPLE D:"))
    print("\n")
    
    total_couple_D_R1 = [judge_1,judge_2,judge_3,judge_4,judge_5]#array of total scores for COUPLE D in round 1
    high = max(total_couple_D_R1)
    low = min(total_couple_D_R1)
    
    print("The highest score entered was: ", high, ".")
    print("The lowest score entered was: ", low, ".")
    print("\n")

    sum(total_couple_D_R1)
    print("At the end of ROUND 1,the total score for COUPLE D is:", sum(total_couple_D_R1)-(high + low))
    print("\n")

    grand_total=(sum(total_couple_D_R1)-(high + low))
    grand_total= str(grand_total)
    with open("grand_total.txt","a") as file:
        file.write("ROUND 1 SCORES : COUPLE D: %s " % grand_total + "\n")
   




def couple_E():
    judge_1= int(input("Please enter JUDGE 1's score for COUPLE E:"))
    judge_2= int(input("Please enter JUDGE 2's score for COUPLE E:"))
    judge_3= int(input("Please enter JUDGE 3's score for COUPLE E:"))
    judge_4= int(input("Please enter JUDGE 4's score for COUPLE E:"))
    judge_5= int(input("Please enter JUDGE 5's score for COUPLE E:"))
    print("\n")
    
    total_couple_E_R1 = [judge_1,judge_2,judge_3,judge_4,judge_5]#array of total scores for COUPLE E in round 1
    high = max(total_couple_E_R1)
    low = min(total_couple_E_R1)
    
    print("The highest score entered was: ", high, ".")
    print("The lowest score entered was: ", low, ".")
    print("\n")

    sum(total_couple_E_R1)
    print("At the end of ROUND 1,the total score for COUPLE E is:", sum(total_couple_E_R1)-(high + low))
    print("\n")

    grand_total=(sum(total_couple_E_R1)-(high + low))
    grand_total= str(grand_total)
    with open("grand_total.txt","a") as file:
        file.write("ROUND 1 SCORES : COUPLE E: %s " % grand_total + "\n")
   



def couple_F():
    judge_1= int(input("Please enter JUDGE 1's score for COUPLE F:"))
    judge_2= int(input("Please enter JUDGE 2's score for COUPLE F:"))
    judge_3= int(input("Please enter JUDGE 3's score for COUPLE F:"))
    judge_4= int(input("Please enter JUDGE 4's score for COUPLE F:"))
    judge_5= int(input("Please enter JUDGE 5's score for COUPLE F:"))
    print("\n")
    
    total_couple_F_R1 = [judge_1,judge_2,judge_3,judge_4,judge_5]#array of total scores for COUPLE E in round 1
    high = max(total_couple_F_R1)
    low = min(total_couple_F_R1)
    
    print("The highest score entered was: ", high, ".")
    print("The lowest score entered was: ", low, ".")
    print("\n")

    sum(total_couple_F_R1)
    print("At the end of ROUND 1,the total score for COUPLE F is:", sum(total_couple_F_R1)-(high + low))
    print("\n")

    grand_total=(sum(total_couple_F_R1)-(high + low))
    grand_total= str(grand_total)
    with open("grand_total.txt","a") as file:
        file.write("ROUND 1 SCORES : COUPLE F: %s " % grand_total + "\n")
   

def exit_choice():
    print("Hope to see you soon!")


def display_menu():
  #Displays the menu and asks the user to enter their chosen couple
  repeat = True
  print("\nPlease choose which couple you would like to supply the scores of.") 
  print("\nChoice A \t Enter scores for COUPLE A\t")
  print("\nChoice B\t Enter scores for COUPLE B\t")
  print("\nChoice C \t Enter scores for COUPLE C\t")
  print("\nChoice D\t Enter scores for COUPLE D\t")
  print("\nChoice E \t Enter scores for COUPLE E\t")
  print("\nChoice F\t Enter scores for COUPLE F\t")
  print("\n Enter X to exit the menu")

  choice = input("Please enter a choice: A,B,C,D,E,F or X: ")#ask the user to input their chosen couple
  while repeat == True:
      if choice in ("A", "a"):
          couple_A()
          display_menu()
          
      elif choice in ("B", "b"):
          couple_B()
          display_menu()
      elif choice in ("C", "c"):
          couple_C()
          display_menu()
      elif choice in ("D", "d"):
          couple_D()
          display_menu()
      elif choice in ("E", "e"):
          couple_E()
          display_menu()
      elif choice in ("F", "f"):
          couple_F()
          display_menu()
      
      elif choice in ("X", "x"):
           exit_choice()
           break
      else:
            print("\nInvalid choice! Please reselect an option from menu.")#Informs user that they have entered an invalid value.
display_menu()


print("This is the total for couple A :",sum_couple_A_R1)
