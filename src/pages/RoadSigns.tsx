import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Compass, HelpCircle, Grid, Filter, AlertTriangle } from 'lucide-react';

export const RoadSigns: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Signs' },
    { id: 'regulatory', name: 'Regulatory (Ibimenyetso Bibuza cyangwa Bitegeka)', icon: '⛔' },
    { id: 'warning', name: 'Warning (Ibimenyetso Byerekana Akaga)', icon: '⚠️' },
    { id: 'information', name: 'Information (Ibimenyetso By’Amakuru)', icon: '🏥' },
    { id: 'guidance', name: 'Guidance (Ibimenyetso Byerekana Icyerekezo)', icon: '↗️' },
  ];

  const signsData = [
    {
      id: 's1',
      title: 'STOP (Hagarara)',
      category: 'regulatory',
      image: '🛑',
      description: 'Ugomba guhagarara burundu, ukareba ko nta kinyabiziga na kimwe kije, hanyuma ukabona gukomeza.',
      code: 'R-01',
    },
    {
      id: 's2',
      title: 'No Entry (Kwinjira Birabujijwe)',
      category: 'regulatory',
      image: '⛔',
      description: 'Kwinjira ku binyabiziga byose birabujijwe kuri uyu muhanda.',
      code: 'R-02',
    },
    {
      id: 's3',
      title: 'No Overtaking (Kunyuranaho Birabujijwe)',
      category: 'regulatory',
      image: '🚫🚘',
      description: 'Kunyuranaho ku binyabiziga bifite moteri birengeje ibiziga bibiri birabujijwe.',
      code: 'R-15',
    },
    {
      id: 's4',
      title: 'General Danger (Akaga Rusange)',
      category: 'warning',
      image: '⚠️',
      description: 'Habonetse akaga kadasobanutse neza mu bindi bimenyetso. Ugomba kugabanya umuvuduko.',
      code: 'W-01',
    },
    {
      id: 's5',
      title: 'Pedestrian Crossing (Abanyamaguru)',
      category: 'warning',
      image: '🚸',
      description: 'Umuhanda ukoreshwa cyane n\'abanyamaguru cyangwa hari inzira yabo hafi.',
      code: 'W-05',
    },
    {
      id: 's6',
      title: 'Roundabout Ahead (Inzira Y\'uruziga)',
      category: 'warning',
      image: '🔄',
      description: 'Guhura n\'ihuriro ry\'inzira y\'uruziga (Roundabout) imbere.',
      code: 'W-12',
    },
    {
      id: 's7',
      title: 'Hospital (Ibitaro cyangwa Ivuriro)',
      category: 'information',
      image: '🏥',
      description: 'Haboneka ibitaro hafi aho. Ugomba kwirinda gufurura amahoni cyangwa urusaku.',
      code: 'I-01',
    },
    {
      id: 's8',
      title: 'Parking Lot (Aho Guhagarara)',
      category: 'information',
      image: '🅿️',
      description: 'Aho kwemerwa guhagarika cyangwa guparka ibinyabiziga mu muhanda.',
      code: 'I-04',
    }
  ];

  const filteredSigns = selectedCategory === 'all'
    ? signsData
    : signsData.filter(s => s.category === selectedCategory);

  return (
    <div className="bg-neutral-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left space-y-4 mb-12">
          <h1 className="text-4xl font-black text-neutral-900 tracking-tight">Road Signs & Traffic Symbols</h1>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl">
            A comprehensive list of road signs and symbols used on Rwandan roads. Learn the icons, colors, shapes, and descriptions to pass your driving test successfully.
          </p>
        </div>

        {/* Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Side Filter Bar */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm text-left space-y-4 h-fit">
            <h3 className="font-extrabold text-neutral-900 text-base flex items-center gap-2">
              <Filter className="w-4 h-4 text-emerald-600" />
              Filter by Category
            </h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-3 transition cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  <span className="text-lg">{cat.icon || '📚'}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Signs Cards Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSigns.map((sign) => (
                <div 
                  key={sign.id} 
                  className="bg-white rounded-2xl border border-neutral-150 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition text-left"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-2 py-0.5 bg-neutral-100 text-neutral-500 font-mono text-[10px] rounded-md font-bold uppercase tracking-wider">
                        {sign.code}
                      </span>
                      <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest text-[10px]">
                        {sign.category}
                      </span>
                    </div>

                    <div className="w-20 h-20 bg-neutral-50 rounded-2xl border border-neutral-100 flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner">
                      {sign.image}
                    </div>

                    <h3 className="text-sm font-extrabold text-neutral-900 tracking-tight text-center mb-2">
                      {sign.title}
                    </h3>
                    <p className="text-neutral-500 text-xs leading-relaxed text-center">
                      {sign.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredSigns.length === 0 && (
              <div className="text-center py-24 bg-white rounded-2xl border border-neutral-100">
                <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="font-extrabold text-lg text-neutral-900">No signs found</h3>
                <p className="text-neutral-500 text-sm mt-2">No road signs matched the selected category filter.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
export default RoadSigns;
