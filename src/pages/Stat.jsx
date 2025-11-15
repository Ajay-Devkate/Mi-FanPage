import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const Stat = () => {
  const [gen, setGen] = useState("men");

  if (gen == "men") {
    return (
      <div>
        <div className="w-screen h-full">
          <Navbar />

          <div className=" h-full sm:mb-18 mb-10">
            <div className="sm:pt-30 pt-24  h-full sm:px-34 px-6">
              <div className="flex items-center justify-between">
                <h1 className="text-[#001746] font-semibold sm:text-4xl text-2xl">
                  IPL Batting Statistics
                </h1>
                <img
                  onClick={() => setGen("women")}
                  className="h-10 cursor-pointer p-1 bg-yellow-500 hover:bg-yellow-600 rounded-full"
                  src="https://res.cloudinary.com/dp8umj9cw/image/upload/woman_1_xmbp2d.png"
                  alt="Women"
                />
              </div>
              <div>

                {/* Here is Batting data */}

                <div className="overflow-x-auto sm:mt-6 mt-4">
                  <table className="min-w-full text-sm text-start">
                    <thead className="bg-[#001746] text-white text-[16px] font-bold">
                      <tr className="h-15">
                        <th className="px-4 py-2 text-start">Players</th>
                        <th className="px-4 py-2 text-start">Mat</th>
                        <th className="px-4 py-2 text-start">Inn</th>
                        <th className="px-4 py-2 text-start">Runs</th>
                        <th className="px-4 py-2 text-start">Hs</th>
                        <th className="px-4 py-2 text-start">Avg</th>
                        <th className="px-4 py-2 text-start">SR</th>
                        <th className="px-4 py-2 text-start">100's</th>
                        <th className="px-4 py-2 text-start">50's</th>
                      </tr>
                    </thead>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Suryakumar Yadav</td>
                        <td className="px-4 py-2">16</td>
                        <td className="px-4 py-2">16</td>
                        <td className="px-4 py-2">717</td>
                        <td className="px-4 py-2">73*</td>
                        <td className="px-4 py-2">65.18</td>
                        <td className="px-4 py-2">167.91</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">5</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Rohit Sharma</td>
                        <td className="px-4 py-2">15</td>
                        <td className="px-4 py-2">15</td>
                        <td className="px-4 py-2">418</td>
                        <td className="px-4 py-2">81</td>
                        <td className="px-4 py-2">29.85</td>
                        <td className="px-4 py-2">149.28</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">4</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Ryan Rickelton</td>
                        <td className="px-4 py-2">14</td>
                        <td className="px-4 py-2">14</td>
                        <td className="px-4 py-2">388</td>
                        <td className="px-4 py-2">62*</td>
                        <td className="px-4 py-2">29.84</td>
                        <td className="px-4 py-2">150.97</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">3</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Tilak Varma</td>
                        <td className="px-4 py-2">16</td>
                        <td className="px-4 py-2">13</td>
                        <td className="px-4 py-2">343</td>
                        <td className="px-4 py-2">59</td>
                        <td className="px-4 py-2">31.18</td>
                        <td className="px-4 py-2">138.3</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">2</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Naman Dhir</td>
                        <td className="px-4 py-2">16</td>
                        <td className="px-4 py-2">12</td>
                        <td className="px-4 py-2">252</td>
                        <td className="px-4 py-2">46</td>
                        <td className="px-4 py-2">31.5</td>
                        <td className="px-4 py-2">182.6</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">-</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Will Jacks</td>
                        <td className="px-4 py-2">13</td>
                        <td className="px-4 py-2">11</td>
                        <td className="px-4 py-2">233</td>
                        <td className="px-4 py-2">53</td>
                        <td className="px-4 py-2">23.3</td>
                        <td className="px-4 py-2">135.46</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">1</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Hardik Pandya</td>
                        <td className="px-4 py-2">15</td>
                        <td className="px-4 py-2">12</td>
                        <td className="px-4 py-2">224</td>
                        <td className="px-4 py-2">48*</td>
                        <td className="px-4 py-2">24.88</td>
                        <td className="px-4 py-2">163.5</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">-</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Jonny Bairstow</td>
                        <td className="px-4 py-2">2</td>
                        <td className="px-4 py-2">2</td>
                        <td className="px-4 py-2">85</td>
                        <td className="px-4 py-2">47</td>
                        <td className="px-4 py-2">42.5</td>
                        <td className="px-4 py-2">184.78</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">-</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Corbin Bosch</td>
                        <td className="px-4 py-2">3</td>
                        <td className="px-4 py-2">2</td>
                        <td className="px-4 py-2">47</td>
                        <td className="px-4 py-2">27</td>
                        <td className="px-4 py-2">23.5</td>
                        <td className="px-4 py-2">146.87</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">-</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Mitchell Santner</td>
                        <td className="px-4 py-2">13</td>
                        <td className="px-4 py-2">8</td>
                        <td className="px-4 py-2">40</td>
                        <td className="px-4 py-2">18*</td>
                        <td className="px-4 py-2">20</td>
                        <td className="px-4 py-2">121.21</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Here is Bowlling data */}

                <h1 className="text-[#001746] sm:mt-16 mt-10 mb-6 font-semibold sm:text-4xl text-2xl">
                  IPL Bowling Statistics
                </h1>

                <div className="overflow-x-auto sm:mt-6">
                  <table className="min-w-full text-sm text-start">
                    <thead className="bg-[#001746] text-white text-[16px] font-bold">
                      <tr className="h-15">
                        <th className="px-4 py-2 text-start">Players</th>
                        <th className="px-4 py-2 text-start">Mat</th>
                        <th className="px-4 py-2 text-start">Inn</th>
                        <th className="px-4 py-2 text-start">Maiden</th>
                        <th className="px-4 py-2 text-start">Wk</th>
                        <th className="px-4 py-2 text-start">Avg</th>
                        <th className="px-4 py-2 text-start">Eco</th>
                        <th className="px-4 py-2 text-start">BBI</th>
                        <th className="px-4 py-2 text-start">4WI / 5WI</th>
                        <th className="px-4 py-2 text-start">
                          Dot Balls Percentage
                        </th>
                      </tr>
                    </thead>

               
                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Trent Boult</td>
                        <td className="px-4 py-2">16</td>
                        <td className="px-4 py-2">16</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">22</td>
                        <td className="px-4 py-2">23.5</td>
                        <td className="px-4 py-2">8.96</td>
                        <td className="px-4 py-2">4/26</td>
                        <td className="px-4 py-2">1 / -</td>
                        <td className="px-4 py-2">36.7</td>
                      </tr>
                    </tbody>

                
                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Jasprit Bumrah</td>
                        <td className="px-4 py-2">12</td>
                        <td className="px-4 py-2">12</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">18</td>
                        <td className="px-4 py-2">17.55</td>
                        <td className="px-4 py-2">6.67</td>
                        <td className="px-4 py-2">4/22</td>
                        <td className="px-4 py-2">1 / -</td>
                        <td className="px-4 py-2">45.07</td>
                      </tr>
                    </tbody>

                  
                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Hardik Pandya</td>
                        <td className="px-4 py-2">15</td>
                        <td className="px-4 py-2">14</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">14</td>
                        <td className="px-4 py-2">24.42</td>
                        <td className="px-4 py-2">9.77</td>
                        <td className="px-4 py-2">5/36</td>
                        <td className="px-4 py-2">- / 1</td>
                        <td className="px-4 py-2">33.33</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Deepak Chahar</td>
                        <td className="px-4 py-2">14</td>
                        <td className="px-4 py-2">14</td>
                        <td className="px-4 py-2">1</td>
                        <td className="px-4 py-2">11</td>
                        <td className="px-4 py-2">34.18</td>
                        <td className="px-4 py-2">9.17</td>
                        <td className="px-4 py-2">2/12</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">44.3</td>
                      </tr>
                    </tbody>

                
                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Ashwani Kumar</td>
                        <td className="px-4 py-2">7</td>
                        <td className="px-4 py-2">7</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">11</td>
                        <td className="px-4 py-2">21.09</td>
                        <td className="px-4 py-2">11.31</td>
                        <td className="px-4 py-2">4/24</td>
                        <td className="px-4 py-2">1 / -</td>
                        <td className="px-4 py-2">31.7</td>
                      </tr>
                    </tbody>

               
                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Mitchell Santner</td>
                        <td className="px-4 py-2">13</td>
                        <td className="px-4 py-2">13</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">31.3</td>
                        <td className="px-4 py-2">7.92</td>
                        <td className="px-4 py-2">3/11</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">33.33</td>
                      </tr>
                    </tbody>

                
                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Karn Sharma</td>
                        <td className="px-4 py-2">6</td>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">7</td>
                        <td className="px-4 py-2">18.28</td>
                        <td className="px-4 py-2">8.53</td>
                        <td className="px-4 py-2">3/23</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">30</td>
                      </tr>
                    </tbody>

                   
                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Will Jacks</td>
                        <td className="px-4 py-2">13</td>
                        <td className="px-4 py-2">8</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">6</td>
                        <td className="px-4 py-2">20</td>
                        <td className="px-4 py-2">8.57</td>
                        <td className="px-4 py-2">2/14</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">39.28</td>
                      </tr>
                    </tbody>

                  
                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Vignesh Puthur</td>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">6</td>
                        <td className="px-4 py-2">18.16</td>
                        <td className="px-4 py-2">9.08</td>
                        <td className="px-4 py-2">3/32</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">33.33</td>
                      </tr>
                    </tbody>

              
                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Corbin Bosch</td>
                        <td className="px-4 py-2">3</td>
                        <td className="px-4 py-2">2</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">1</td>
                        <td className="px-4 py-2">55</td>
                        <td className="px-4 py-2">7.85</td>
                        <td className="px-4 py-2">1/26</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">57.14</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }

  if (gen == "women") {
    return (
      <div>
        <div className="w-screen h-full">
          <Navbar />

          <div className=" h-full sm:mb-18 mb-10">
            <div className="sm:pt-30 pt-24  h-full sm:px-34 px-6">
              <div className="flex items-center justify-between">
                <h1 className="text-[#001746] font-semibold sm:text-4xl text-2xl">
                  WPL Batting Statistics
                </h1>
                <img
                  onClick={() => setGen("men")}
                  className="h-10 cursor-pointer p-1 bg-yellow-500 hover:bg-yellow-600 rounded-full"
                  src="https://res.cloudinary.com/dp8umj9cw/image/upload/man_kygmw0.png"
                  alt="Women"
                />
              </div>
              <div>
                {/* Here is Batting data */}

                <div className="overflow-x-auto sm:mt-6 mt-4">
                  <table className="min-w-full text-sm text-start">
                    <thead className="bg-[#001746] text-white text-[16px] font-bold">
                      <tr className="h-15">
                        <th className="px-4 py-2 text-start">Players</th>
                        <th className="px-4 py-2 text-start">Mat</th>
                        <th className="px-4 py-2 text-start">Inn</th>
                        <th className="px-4 py-2 text-start">Runs</th>
                        <th className="px-4 py-2 text-start">Hs</th>
                        <th className="px-4 py-2 text-start">Avg</th>
                        <th className="px-4 py-2 text-start">SR</th>
                        <th className="px-4 py-2 text-start">100's</th>
                        <th className="px-4 py-2 text-start">50's</th>
                      </tr>
                    </thead>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Natalie Sciver-Brunt</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">523</td>
                        <td className="px-4 py-2">80*</td>
                        <td className="px-4 py-2">65.37</td>
                        <td className="px-4 py-2">152.47</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">5</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Hayley Matthews</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">307</td>
                        <td className="px-4 py-2">77</td>
                        <td className="px-4 py-2">30.7</td>
                        <td className="px-4 py-2">122.8</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">3</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Harmanpreet Kaur</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">302</td>
                        <td className="px-4 py-2">66</td>
                        <td className="px-4 py-2">33.55</td>
                        <td className="px-4 py-2">154.87</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">3</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Amanjot Kaur</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">7</td>
                        <td className="px-4 py-2">128</td>
                        <td className="px-4 py-2">34*</td>
                        <td className="px-4 py-2">42.66</td>
                        <td className="px-4 py-2">133.33</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">-</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Yastika Bhatia</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">88</td>
                        <td className="px-4 py-2">15</td>
                        <td className="px-4 py-2">9.77</td>
                        <td className="px-4 py-2">101.14</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">-</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Amelia Kerr</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">8</td>
                        <td className="px-4 py-2">73</td>
                        <td className="px-4 py-2">19</td>
                        <td className="px-4 py-2">9.12</td>
                        <td className="px-4 py-2">82.95</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">-</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Sajana S</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">8</td>
                        <td className="px-4 py-2">51</td>
                        <td className="px-4 py-2">23</td>
                        <td className="px-4 py-2">10.2</td>
                        <td className="px-4 py-2">127.5</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">-</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Kamalini G</td>
                        <td className="px-4 py-2">9</td>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">32</td>
                        <td className="px-4 py-2">11*</td>
                        <td className="px-4 py-2">10.66</td>
                        <td className="px-4 py-2">128</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">-</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Sanskriti Gupta</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">4</td>
                        <td className="px-4 py-2">23</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">7.66</td>
                        <td className="px-4 py-2">127.77</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">-</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Shabnim Ismail</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">2</td>
                        <td className="px-4 py-2">4</td>
                        <td className="px-4 py-2">4*</td>
                        <td className="px-4 py-2">4</td>
                        <td className="px-4 py-2">400</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Here is Bowlling data */}

                <h1 className="text-[#001746] sm:mt-16 mt-10 mb-6 font-semibold sm:text-4xl text-2xl">
                  WIPL Bowling Statistics
                </h1>

                <div className="overflow-x-auto sm:mt-6">
                  <table className="min-w-full text-sm text-start">
                    <thead className="bg-[#001746] text-white text-[16px] font-bold">
                      <tr className="h-15">
                        <th className="px-4 py-2 text-start">Players</th>
                        <th className="px-4 py-2 text-start">Mat</th>
                        <th className="px-4 py-2 text-start">Inn</th>
                        <th className="px-4 py-2 text-start">Maiden</th>
                        <th className="px-4 py-2 text-start">Wk</th>
                        <th className="px-4 py-2 text-start">Avg</th>
                        <th className="px-4 py-2 text-start">Eco</th>
                        <th className="px-4 py-2 text-start">BBI</th>
                        <th className="px-4 py-2 text-start">4WI / 5WI</th>
                        <th className="px-4 py-2 text-start">
                          Dot Balls Percentage
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Amelia Kerr</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">18</td>
                        <td className="px-4 py-2">15.94</td>
                        <td className="px-4 py-2">7.75</td>
                        <td className="px-4 py-2">5/38</td>
                        <td className="px-4 py-2">- / 1</td>
                        <td className="px-4 py-2">40.54</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Hayley Matthews</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">18</td>
                        <td className="px-4 py-2">17.05</td>
                        <td className="px-4 py-2">8.22</td>
                        <td className="px-4 py-2">3/16</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">34.82</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Natalie Sciver-Brunt</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">12</td>
                        <td className="px-4 py-2">22.5</td>
                        <td className="px-4 py-2">7.94</td>
                        <td className="px-4 py-2">3/18</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">44.11</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Shabnim Ismail</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">1</td>
                        <td className="px-4 py-2">9</td>
                        <td className="px-4 py-2">30.11</td>
                        <td className="px-4 py-2">6.77</td>
                        <td className="px-4 py-2">2/17</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">55.41</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Amanjot Kaur</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">8</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">26.8</td>
                        <td className="px-4 py-2">7.88</td>
                        <td className="px-4 py-2">3/22</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">35.29</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Sanskriti Gupta</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">6</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">4</td>
                        <td className="px-4 py-2">14</td>
                        <td className="px-4 py-2">6.58</td>
                        <td className="px-4 py-2">2/11</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">37.25</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Sajana S</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">1</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">1</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">10</td>
                        <td className="px-4 py-2">1/10</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">16.66</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Parunika Sisodia</td>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">4</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">1</td>
                        <td className="px-4 py-2">84</td>
                        <td className="px-4 py-2">9.33</td>
                        <td className="px-4 py-2">1/21</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">31.48</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-white">
                      <tr className="h-15">
                        <td className="px-4 py-2">Saika Ishaque</td>
                        <td className="px-4 py-2">3</td>
                        <td className="px-4 py-2">3</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">1</td>
                        <td className="px-4 py-2">84</td>
                        <td className="px-4 py-2">10.5</td>
                        <td className="px-4 py-2">1/33</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">25</td>
                      </tr>
                    </tbody>

                    <tbody className="text-[#001746] text-[16px] font-bold bg-[#EFEFEF]">
                      <tr className="h-15">
                        <td className="px-4 py-2">Jintimani Kalita</td>
                        <td className="px-4 py-2">3</td>
                        <td className="px-4 py-2">2</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">-</td>
                        <td className="px-4 py-2">10.5</td>
                        <td className="px-4 py-2">0/9</td>
                        <td className="px-4 py-2">- / -</td>
                        <td className="px-4 py-2">16.66</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
};

export default Stat;
