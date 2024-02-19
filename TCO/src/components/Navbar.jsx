import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black ">
      <div className="w-10/12 flex mx-auto py-6 justify-center items-center gap-x-20 ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight"><img width={110}  className=" h-[60px] px-2 content-center object-cover rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABrVBMVEX///8yMDNAn9n///77/////f/8/PwwLjH4//8sLCwyMTL//f7//v30//////z///oqKCwjISX39vj///ZAn9cYGBhAnttlReajo6Pv////+v8I1Ln7//saFxvR0dEiIiL///Lc3Nzl5eUlJSUYFRpCnd47otVvb28OCRBdW14AAADIyMifn5//+/RFnNf//+m8ur1NS05oZ2ivrrA/PUCDg4OMjIwTExNAksPA4e43lLtkRuXpUHT55eiMw9lHlcPd9fmq1eZlqNR9ssvS5eyy2+k9jsWo0uteocQnoMp3sNCw0d9GmuBxp8ObwNT35bHr2Zown73p0Jv++9PuxpHvmQDep1P+79LpsXjhtlfkpAn/mwPr14GLyeL9lhXfqhHmnju76vDe7fd2qtTU/P/TzOfGvORkTMBTN8yCcsf38P+Avd1jP/RvtMWtntFSM9qX0t2HrtORgMBpWLNRNr7oj5vtwM39WXvWbIfcWHjqrTqV3thK0bzovFPqnB0Yy77my8oA1q/fp6362+i9+fLAtuN7ZtD/UHnkh5tUrsV33M2W39cXvaRkn9Kkxc6YZ59JAAAbh0lEQVR4nO1ci3/bxpGGiF0QEoAFRUCwAK8s6AFIqkX6pQfI2AQoUjJEyerT9TWue2dHThzLjtPWl8StmzSp215dt3/zze6CL8lxUp8rOTl8yS8OAZDcb2d25pvZpSUpR44cOXLkyJEjR44cOXLkyJEjR44cOXLkyJEjR44cOXLkyJEjR44cOXLkyJEjR44cOXLk+J5APukBvA5MgiQJqRJBCtawxoAQhauIIiRpWvc5nyo+pUilpkWx/12iaqgIWRZCyDRlRWIEJdk0fYok3bJM0nuO6Jrb3EhbbcmyJHqCA/6XQSyfurebrVZjM7EqzGpINykyajubiaH2KaqK2tqq2uHWVeqr+CRH/K/CtNRaGhWcgm3He66KwIYEuY0fb29vR52Emt3nEN6xHdsuFOpJxfguMdQt1IiqBcdxYPDVNDGRjivuQWQ7u7uBnbomW3FYtjBG1wrwjB2GeybFpoEkapnopIf/LaDTvchxCl2kLiLY3NzKrtgtHj6pgig1UjAzoNqgFibKD390TsOqf9LjfzVkoimo/WNnt0fQdg4sQzXSKmdoF5w4gcfkGz/6yU9No1MIgWAh2lQl7P/s+vWf39DltzzkUFNTjDQMArtHMdhKqOLWM6vaTlQDM5P/ePf6LzRai0K4Vo0TgvG5d2/evP5L/213U2ppSrK9G4Rhj2AhuuVXklgQhGUXbrJo++7NX/3njYp5FfhVnVuoIsk3/uv6zZs/MipvuQ1RRbV2qoUBQERNKTEix4bQEwShY9ckhVi/uP6rX5yj+u2g02huxG2TmObPPv/85zc0ZL3dqR/5hrznDDF0CqmBrFbgMD+1QztsqropnfvJT24QKj3cuiMbt+upAUHU/+lPz4HGecvTBjCkjSMMXWS1I5YeYXXaUdS5rfqmb8lIvVNvqZauXo0aVK0QFXvIMt92hpZqNp0jXippUi22mZ9W95JGPTqAvG/UGo33wraKPM9Io7YB6VDTZU0j3/wtxwckYZ2LMLF0NKxIGCntsApJocsQVFlD1SUN3enEdpDWDB+1N7a2mvudqGAHzlVENNNK6hudjQ7cMzWJ6vDBCKnEP1FuAqaOkUGRgkSEB8+zQJKqqT1gxaBQb/PwaKr7H29tVgwL1MtmWq+HIdjUjjYplB9uKwD9Fu2YpkmgMNErlQpBb0NQlSECUp9oms5ewRK6+/5dYtHaNsTMHkOnY1SYjUGPt6OGCQx1Exm3QkgoDnNhFxgldYdpm3oCjmqaSFUNWJ5vw4JEqu9XYDhmBV7I1t0P7p269+F9S30YVXsZP4wTWhEPW0l0IKuWqoIXNgOnGoCpHdADkr7JHBvEwKaKdWq1W2k9bRqVE2bHoEO4OGg1Pk64l97/4MGDUw9OfYhp+WHYlW1OvV2xPHbbNDU3TUETIFMn6J9BIQwgR4LisZC+WQClXgiqDRdm4irEpNAupMmJcgOnM0zLSNIqyJdo68CoGPJHp9459c47px7dl4j7cR1yQ1C1660EKnte1WNfR2nsVjQelnaCoAoCxwm2DapqSQQvAyesR7+ubYKChRtOnLoVbJzgYkTIt2p1tpqAS/UaxPrfPDgFDB88ukv9CnZb8cbGw2bbsiAZYMFQIQdRYorAm8RhzCJttSWbqoY+/vG240S3rm6E0a7DBbpjxzWE0UkKHNlPYlhJdsCczd4Dho8Yw1P37kqKrqBrsUsNhBVX8bDXZdjYSiCpsFfWZt0BmVMFo0LUNFGtk7Zq9Jx5Z29b1CAgfxoGPsloAyGhCf7ksEIXlk2USHfvvfMA/PS3WINg6EYbfgUiP1KuXFFd9gbPR2Zzq5YxNOntThzHewlUwpoFpYXsGrRiIdxmyodX/vZDQ9dPMP/rupE6kNN4DRsWwh1ifvT4wYNHH9z1TaLr7eiWpUKVW/nvy08+ETa0TONq9b2rd1TIB0SB/7iJiyoeK4URYrnUlLFyLtli01YIt0OnAU+ylscJeSqByBj0ytwg3EOmdvej33x0X8MVE7JBVAPLeOUrlz/99DPua4gmaQTCu95wK0jvfY4qE920CIhUSiBnuuAYLDdCYA1rVEcnaEOMoartKZddYMisAKnA8kx3s7ER7xMNe96VJ5/+9TOeTEwILtz5qgfqQJlrWD5yXQOBeiCSsfmPre0qc3xnN4BYSsGKJ8cRu6kzaEPmZBghzTI268AkTDdV6nrok88+u8JtKO8FLLYEQbBVs/oMsVp7WI/re65J3VoaRbf2r0YQgcLtv92RQBww3z0hglQ3GtU+w6jmE9BwFhtxDLoU/tmqacZ9w8OqxxkaaSEOROPpwDT7n9OI2HIO60ntWrTVSEC2tjtxtLFTppqJrHO++bVD+PdAwSqmyFAJ9YykHuyGAQt9gd1yfdZggjTgplm4L9hGRekvpKQO6U+0ajZMpCiKhpBsSJuRKEScKNxikkbuBxb93M8+f/d3P6TlY2UIQ/P2f//0+W10n3rNrcCuQtIP7TixMvUh16KsqVaIakhTeiZIYp4DmBjvEMVQmaPqmpSK2QAB+/CO29vS4Cz9P1y/efP65z/xj5WhQjX16enTp188o1SnoLBgXQXVjcSyVHZbl9BOoWfDHRX3bcibo1yqVvdk4nkKkVUXJRFvHLNewEOJakPf9aPrv7p+/frN3507VoYe1fdfnP7ii9PPKdX829FGmsbvNV0VbCsYSjt2V5TYO0QfkF07kCs4lziRiCpd+eOfFOrtx0FWhwBDgz/HN6syhu/evH7z8xvHyhBT7dmXX54+/eVTBXvqtfiOakAt51sU8XCiIXonYiMGj3S22mYFQXyVeMYnbidyuPM2VYL0T56AFFDuu1usf8N7OA1EdDFLhPB5+Rn46M1f3bx+vAyhUNhnXnr6OSzIWr2FKAgYkI9E5C3NoErH5i21sJAihW0aIqEuiWXsxZEdpTUD9Ez5yaefXn5yBaM0hNzOdF9cI8KjCQRlGQp/6YfMR2/e/MPxForYUNDtL168eO66pteBtA41vgI2xJLFGSKzksRgRAg/9URTqfbHr776E1+ipFIhbq2WAG0QPaB14J8/GaRdDwJe7ttNqcJtSEEq6Cb8r//Ld6/fvP67G8axMlTAHTX32b4BFUHbPoDCRzYty/cz6WFizZeSVhTYYSeRMfK+evLXvz75RFJYjQ9r0jIleAM87H12+fKTJ1cMDUO6AILRhh01XP4hbFtYRUgitPLDP/zhFze8490epp5CGRsZ8mFr6zbYDpv3P/rwz9jKGMJChcq4fSvahNIe/QmcEbyRBQ7I8kzzsL1SkGjoypPLn33ietiid/Y24s6OC6q1w6wlm5KRJIkLRjd8v+L7okVwbGALS23/s9XZ29mMD1RieJr1lwenHn0EhoGpxkBEKJhCi3hI/eTy5ctsvWkq3GKdK7b1ze5rkueJ3NA1kOc+jDYSRYUSMY6iaKuzY/DN1eMuLQhxm2l9G1aOHUU1TF2F3H986vGpD30WbXi1w10NbaQuxuonT/76KZD0NARyjvmnZaqq4KVpw9kPKe5eVGj7t+p2sMv2Urev7asnoLuRC4uMIYQQX7+NPXrOe/zg1IMPfSLB8C1LMs+xSUeNKNFgHcJy+/TJV1iTNZMmzcYtCKTdQR/aRqO6ptai6jXWNAh55rTriXHcqlSS3GtVx+ZCjaW2es2jlvTnDx7/9j7xecOUVYjcrdqFJkGecuV/njz5SkGSpkCugKQXpQlnCMlggCHL8YQosp84AXiH+IIq0wbHyhBWIAHTBEJHsmbnbvDjpKKZ8v372NRMH5vvP3706N7ju8TUVCN6T2adJB1ym4ckHbFKxAYDAUVYjcBQ0k1J0SC6SlYFKRWTqpKexAGznyP2UwMb9N0x7piaVDaTqNDVz1xhbv+alW/caLKP739wiuEvnoWp1Nlye2+lSGGbT3xi4gbNykOYMRklteZmzaUW5SdtWrbT3z2GKrHuysfIkGhQEkZ2wR4YQ8h25TNg6/1H7zCG9+5qEpWusq5Tj6HayOSqw05jSKKvQVCtE0U2P5QCBZkmu7EzwBDqLHsHyccXSwlIy3SAnqjtN1/GUMY6bUeN/ltltSNKJNCg0X4mYit0D8ov1naygzgxFCyBoauD8xc4DYMcn58i1XRZCdvfxLbD3e297m3Zku7e4176+L6PPd+op/wyfytBrewddlBtumyzSpbQXtUJofxiuhucAWjXhhgGIFlbTMQeG0OkJVtDu58wsKDHEPSMyZrCkP1BpkLd1NpydZVahIIM8+ktSHFgc4g1u1v1a3ttt6Lfrg+sOielJtgQ5F6f4bZ9vAwtRJKoMMxw2+nb0Ce+8tEHjz/4CPuabOloJ6qxE15QXKBz6Oq2KA53d+sfNzthuBX/unZtuzAwYXYNSbyLPuClBd4zPS6CjKHowfQHVQgLO737Jia+Jd2XzvlgTYuQJIbhIR1KCrW9YaeNGFIFBJpfGxYx2o2/1aMwdAbOTjkdw4TPd4L+FRDkNUSOr9lmIo22hry0Cuk56d3HMtYICE5iwb/wz+0wTkFcUgS1Rr3hItYrjOsNQzEQRR66c+AMEiwUYsNXd8KB/WM7KKQggcixKTcda5TtKtiZ/dhKKdibUBVBweNhqlJIApT3N01Soayp6DjRtf1mvPVeApGWuO1azZAphXJSVy2rycJoP65Ut1yfJvXQ4bsy7Ftgxe5AuX986ULDkqJeC7N8aPPTlUyG1XSTsG0mqHNk1oDgUw7aIBt8XE83DV/Ch2xhWs1+TOE+WXV91ajFrNMRCmFT7bjHqryhFlBQ0u2YBSyNRY39W1Hcaqu6RVlvXiWV7Pyk2qqKMOIEBy5UyOx0sG8pvXICI3o75mttwEt1ZNHNiG/vM+EWtlxF//rx/JtA22mYMQxDCCW+mRw4USvxyg/tKN5LUEUwZEf1stOIBwh82CJ3378r+f0PQmYSV6sDCzFsIA0UqgGVMOuZO1tx0z3GOJpB0zBJOjzlO3a93jQURcU06QRRA2zrMEVGBMMEGAYiGnV8naj0/cf37v25f2aN0go6GGIYtwl7L/FRu9FJ09aOYSpIP34bQtGjthtpHLHGA+eiyTKqbWQhsHqVWHze3TiwuVoJwxYETiL99p13HvxluOOSxOLAiS3OCXctdsIn9zQNxBtRDZVt2WZtPgVZbr3ALeakqjjHjdKgIE4j2k0LIZ/8lhUdw5vWZs0JWNTkUm7DVc2BOuLkaLLWgwk6zIdip9eG0OT9ujBiELsilsq1LXZkBBjGrqUi33//3qPH7w+frESonRb4yShn60A1K+bhsv9EwFvuWIKaBkk9glgBhiLkpwbil1lJD+apVuO2qZqUWDpEmkNdF6RY7mYK6Sdu1SBCyYe/5pgoHQaiuvHs+fO/u3qW4Ni8VyhU8CGLr01qehLGQFqt/Q00zEECyhkWmAlpnlSG+4KgzpElGYlrSKapIjRowZNjSBF1//7i9OkXT/dRf1VhK/kHW3aQonWKqYwpRE/PBfj+yYzz9UE9/dkLtm/x5XMk9pX4D5sq6i0HxMseJG3E2jC6plDisV2bt+q46LeBgvBzRvD0Fy+Q0UtWBgjKFCxm+lT11P1nv993PUJVEDjWd46hZ0i//4JT/NJVPRbUWf2HpL36JsWegpGpPhNODMuRMpz0iP9VEEv7PSd4+qnqGbqZ7HTSetpqxinkRxXqK22fO/Hp55gqA+9TlHIPyuANjPs3yiIMS70HXzoETYMPmD2/trB04cLS6vLZMnvLm4NH9YTvH754xihdjVhah7qAbUOxcwldJz59et9TB9+4NlHKsHhm8DqeWezemFrLri1Mj7Lnzr6coCTNLq9MTY2XisViqTQ+NX7x5Q++LkOV4P3nT58+feYR5KYgSlghwORZywWNA/H1qSD45b43tO+3wAbEMT459IkX+zcu8QuKtDLKXs7PvMQ0zHyri3PFkT6KpfWl2TdnR3bO3JNcF3mVstthW6GODYnQtp3qgWtKGpUyG75IyNASvNAb1NzC4PWZ+d5Qp85mDNfHxuDl4svHPDk1x2/3MTY2On3+zTFk0ltViQkVIduI4BWeAzYEoptU9yjZZ4EW1iHUTAPvK4/2RlVc6V9WwIS9kS7O8mt4dp09Wywe/XZNKy9N9aaqOCaowh9ji5feEMEByOwI0FBfCkpYbJheN5YO/fpldqLHcGxits9wZrFvi3ERaaQzU3z8F49+Z7m80puQ4iigb8z1N7oYGTA61IUoFKKaigxaxu6zvz8zvIoxqMLODDCcHhjMQt+ExQtYMLw0zl6W1qQj6BEsjs+XLq4uXByd775/bPRNBlQGhXSCQwydhqFIhkEhMcqUGkM/7T0/zRkWOcPl3qKZWe+bsHQx0/JrnOH4Eb9TpKWMz3hpbUZcO7Mw35235TfMkFr/2B36kVrBDq5RX8MIK1jSPPhzMNIsz/G1tVJks32xx3BhlBuPL63xtYyhsOv4UbebnMpC0kJZwsylFQlL56cyG46+YYamGzvDJgydv0ky1onusQMjQw/j7qgnhXnE3hPGIpCurJW4EbpGE4TnZw9/5ey6iCsTw+nmTJd3FoqV7A9F440vjOVD/qv0/nylY5vsnNowxaAFpRQob6pjNFzL4mzUUzNZ0OQToAne45f4H2MTmdHK3JeL40eOJHKDc3ccvKVkXt1duNmogaBUPju5PHn26NHGmfNw/fyRGTwEqrYOESxUP9b9imqwZHmoSYYlMc+LmDOdOs+varMskBaL4mIvxM6KULpyuD4USWSktHB46svjWaQSL0cnAD84C8pgfWp8fHxqcWGmbzYQDGtz63B5fGJ9dG32VVaUzaY97KZO9WOJGs00jdNN9RDDskgK49JqSaw4DmHCZUF/bDqbbOF1paXD37jGl/LI+OyRUXUDsuA7zfLjxOylnjIYXV/uW3Z5Yq6XRecmzr6CIYjumB0F5imD7UCAgKt3agf8pEa0Z5ChU+hZilsSmaDIR6/Mzgti3JTwjdmzInSUVg99oTZWHBO+eGRUy5mb8hszYOqxsdJaP0qDHhBxFhbmwsRYBqYX5lZewRC0TXMr2BU/2ua7GWGzE9dBvgVss75mEtXqP31+PBt1ZiBeD3B7zi1DruQz3c3wYryH1GtP3k3NHB3L+Ywh7k/QSD/P8uVxhs0Lxmvi5ujcKDPk+NLXlC8cOqq4nW5Hl29gNFTz9gY/V+o4dks10YCn9kYt3HWelRfchCPgmyLDz3Uz/GpJrNVD61A8NSj5+gzFuIXME+GaxypAJvHA5xlD4S0jUxdWV8fGR+ZXsaR8PUWCKqbbqofdcBM1JOuc+w92yDA7jjDopasiWUCEYRlRZPPVuSwALk9zql2jXchsdYih+IgjznuEvHgO+K2sXbq0tpLxFZp3eUBLLP9gWXrlj45MlVQ0tRkHrDy0o7hGfLXipgX2MyjbDtmBi4GOfJbiZrLEyMYplOoi+IkIFN1kIQlvXCwfYrgkZMHLlItIF5mQFc+NzIsH8aqgOM7Dt9BEJSihwXRnpG/+WRUixK0ddNJOo2YQZBFFbYWhs+vYQfRPpGgDvbgRMTxYfpNMvsF0a3yueQ67wPPchFhgCvdjKIgOB5SV4kuXZ3/+OHlFKo2wSDNxvneTfzrXdJr4jNJyWdIwfoWD9hnSCjUkFf5VNc0zCVJrkW2zH21HyRDDciY74MrZzHR8FRanWOkqovdElix4RBkbPZIsxCe8jKFIoCPzzAkUhefY0X7SPD/dW+XZRIOsvTh55tu1Y4lZMbGmYNmyiKoTUDK1yAFHDdtEGvjrkrI4yFOycM6pmdWut2ZXeiGEB8axuSPrLWN4pOJQurGlxKdIpKCJfsSdmegx1LrKfaQ0PrW+cEb6xl9yyIQQ3QdY7Odn7HisjpJG5z3nQB3eFeslC8AKz2qrRbH+y93CqpfheTQYmz5iK+GKXeEywLA8Jwa9wIX72amRgdzaY8i9FJ8dqEaLo+svqc8OgcjsJ/kMEvsbr5CsKzJrkG7UE6rrA5Emi2F88V/k64JPpvCl89PFwSC5KmT4+cNflgmXqdmh3R3wexFLxtbPcIaTfUkhcT8SXsorFSxNLpbG+p2B9Zct6m8DfWd7xwTr9r20nyy6uWGk70vLvHTsLTAeC8fWjyT2rnAZlqVYu5Ql8YwUr1N6q1jrVjWLmdabWZibmBvtjmDxNbs7xIo2VDBo34Yigk/xNuLZie7nl0R4X+V6M1PjkrIiquTh8gFwJvOwqUtDlzOCI+tZj5L3fYpdL8XabDcEKNlbymcmL05lWfKl7bxvAcU/iNqGSrqaRpHEBy6WWXSd7QlGbico3Hm3ZT4zWllIuLHhT2QqMevW8fJQycZbXp06FIGyCeK9NwVsuJQVpj2G/EsulTKGr2dExW3XDwYZdisLlj8Uaa5vQv7x02Pd1M8gAsPYyuQgGMOuO0Ku67aAZ9dGs+BYWpHE+8vT2RoTJp1dyhJ+1mgvLzFFrOBs3Sx+U434NUC+G0POd3tFWZbiMk/phmwuTruFVXEqe1gEBiEqM0xlq2qlu35KU/NLCwtL4/NCdoI8GOs6dddDivMXJ89PXlwsjQx0BbTZlfEV7iuzmX54PYISRQ1I/PXNnvIWEVxEzl5J3o13M1PZQhGY7Jq4j64Hzkz0W93FUqnYfTU2OjrbZTiwymFuStn9C2KyZ1dKMJVLq2tL48XBD/6XYbkddoay1WM4KZJ4JimzWmdeuBoezJVSpscPMex2+wfT2eD9pX5YupS5wOD90VF+X5ktCVlaKmXifOR1f7upow47Q7LXqy240xe7Ka4ncEQ2GcyVgKXRkcOY6nXdzo6XjtwtzS8PKEwxQcWVAYqlUbHaynPDby6Nz7zuX2iApTZUVWnSq4CX2ObL2EQWz8vj/FU3pa/ODb0cHS0exno/HpQX1kujY30U5xYXZgeLPNGtGp+dnus+sd6z8JnSdLH3xtH5pVd2aV4JatFkc9Pt/RU6ygprwI/2BnphDl71KtmlOX6zS39i9Ah+MFgFzKzOTUzzt8zNTa+vHG4mjWUad3ZhemIasL7SE0eQW5ZXJvjV6Ym5hbP/h70c3bI8raLhbkdRgVAN6HYM2P8pvW3SQzelsng9hOGxKGcmVxeWli4uLPOG4FARpAiNy/JQ+ewl0TLst0cBs2cvTS5fOj9Tll5V3n8TPMUw2F9sdfy/6MnqlJd1q94oKNEIJea/829eUb5mR1RUnxB8/70MGY7xdyB9aFnHZuqN77S9PRBq4uiWx/cFONtRPrrl8X1BVn+8tKf6PYHCe/ZHu1jfH8yuM4ZzryuovwM4+wO+s/a67ZfvAGbPcHxvQ+nA/u/JDiNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuT4f4H/BQa9ojfZDmroAAAAAElFTkSuQmCC" alt="" /></span>
        </div>
        <div className="text-sm lg:flex-grow flex gap-x-5">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4  text-lg font-semibold"
          >
            Home
          </Link>
          <Link
            to="/calculate"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white text-lg font-semibold mr-4"
          >
            Calculate
          </Link>
          <Link
            to="/about"
            className="block text-lg font-semibold mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
