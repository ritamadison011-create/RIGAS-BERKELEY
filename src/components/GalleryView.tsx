/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LightboxGallery from './Lightbox';

export default function GalleryView() {
  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4">
      {/* Intro */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="text-xs font-mono text-[#148062] uppercase tracking-widest bg-[#148062]/5 px-3 py-1 rounded-sm border border-[#148062]/10 font-bold">
          Visual Archive
        </span>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight uppercase italic">Rigas Berkeley Photo Record</h3>
        <p className="text-xs text-gray-400 font-sans">
          Explore photographs spanning our central Chicago fabrication yards, active subsea pipeline turnarounds, heavy cranes, and structural alloy welds. Click any thumbnail to launch the high-definition zoom lightbox.
        </p>
      </div>

      <LightboxGallery />
    </div>
  );
}
